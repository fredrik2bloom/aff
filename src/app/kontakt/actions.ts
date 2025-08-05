// app/kontakt/actions.ts
'use server';

import { z } from 'zod';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the shape of the form data using Zod for validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Namnet måste vara minst 2 tecken.' }),
  email: z.string().email({ message: 'Ange en giltig e-postadress.' }),
  subject: z.string().min(3, { message: 'Ämnet måste vara minst 3 tecken.' }),
  message: z.string().min(10, { message: 'Meddelandet måste vara minst 10 tecken.' }),
});

// Define the shape of the state that our form action will return
export type FormState = {
  message: string;
  success: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
};

export async function sendEmail(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // --- SPAM PROTECTION ---

  // 1. Verify Cloudflare Turnstile token
  const turnstileToken = formData.get('cf-turnstile-response');
  
  // The Turnstile secret key from your .env.local file
  const turnstileSecretKey = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;

  if (!turnstileToken || !turnstileSecretKey) {
    return { success: false, message: 'CAPTCHA-verifiering misslyckades. Ladda om sidan och försök igen.' };
  }

  try {
    const verificationResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: turnstileSecretKey,
        response: turnstileToken,
        // You can optionally pass the user's IP address
        // remoteip: formData.get('remoteip'), // You would need to get the IP from headers if available
      }),
    });

    const verificationData = await verificationResponse.json();

    if (!verificationData.success) {
      console.error('Turnstile verification failed:', verificationData['error-codes']);
      return { success: false, message: 'Spamskyddet misslyckades. Försök igen.' };
    }
  } catch (error) {
    console.error('Error verifying Turnstile token:', error);
    return { success: false, message: 'Kunde inte verifiera spamskyddet. Kontrollera din anslutning.' };
  }


  // 2. Check the Honeypot field
  if (formData.get('fax')) {
    // This is likely a bot. Return a success message to not alert the bot.
    return { success: true, message: 'Tack för ditt meddelande! Vi återkommer snart.' };
  }
  
  // --- END SPAM PROTECTION ---


  // --- FORM VALIDATION & EMAIL LOGIC ---

  // Extract data from the form
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  };

  // Validate the data
  const validatedFields = contactFormSchema.safeParse(rawData);

  // If validation fails, return the errors
  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Formuläret innehåller fel. Vänligen korrigera och försök igen.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Kontaktformulär <info@casinoutansvensklicens.eu>', // Your verified Resend domain
      to: ['info@casinoutansvensklicens.eu'], // Your receiving email address
      subject: `Nytt meddelande: ${subject}`,
      replyTo: email, // Set the sender's email as the reply-to address
      html: `
        <h1>Nytt meddelande från kontaktformuläret</h1>
        <p><strong>Namn:</strong> ${name}</p>
        <p><strong>E-post:</strong> ${email}</p>
        <p><strong>Ämne:</strong> ${subject}</p>
        <hr>
        <p><strong>Meddelande:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, message: 'Något gick fel. Försök igen senare.' };
    }

    // Return a success message
    return { success: true, message: 'Tack för ditt meddelande! Vi återkommer snart.' };
  } catch (e) {
    console.error('Send email error:', e);
    return { success: false, message: 'Ett oväntat fel inträffade. Försök igen.' };
  }
}
