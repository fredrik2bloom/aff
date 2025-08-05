'use client';

import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';

const AgeVerificationModal = () => {
  // State to control the visibility of the modal.
  const [isVisible, setIsVisible] = useState(false);

  // useEffect runs when the component mounts.
  // It checks if the user has previously verified their age.
  useEffect(() => {
    // We use a timeout to prevent layout shift issues and ensure the page is settled.
    const timer = setTimeout(() => {
      const isVerified = localStorage.getItem('ageVerified') === 'true';
      // If not verified, show the modal.
      if (!isVerified) {
        setIsVisible(true);
      }
    }, 100); // A small delay can help with initial render consistency.

    return () => clearTimeout(timer);
  }, []);

  // Handler for when the user confirms they are over 18.
  const handleYesClick = () => {
    // Store the verification status in localStorage.
    localStorage.setItem('ageVerified', 'true');
    // Hide the modal.
    setIsVisible(false);
  };

  // Handler for when the user says they are not over 18.
  const handleNoClick = () => {
    // Redirect to another website.
    window.location.href = 'https://www.google.com';
  };

  // If the modal is not visible, render nothing.
  if (!isVisible) {
    return null;
  }

  // Render the modal.
  return (
    // Overlay covering the entire screen with a dark, blurred effect
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/80 backdrop-blur-lg">
      {/* Modal container with styling inspired by the Hero component */}
      <div className="w-full max-w-md p-8 mx-4 rounded-2xl shadow-2xl bg-gray-800/70 border border-white/20 text-center text-white">
        <div className="flex justify-center mb-6">
          <Shield className="h-16 w-16 text-blue-400" />
        </div>
        <h2 className="text-3xl font-bold mb-4">
          Bekräfta din ålder
        </h2>
        <p className="text-gray-300 mb-8">
          Vänligen bekräfta att du är 18 år eller äldre för att besöka denna sida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* "Yes" button, styled as a primary action */}
          <button
            onClick={handleYesClick}
            className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Ja, jag är över 18
          </button>
          {/* "No" button, styled as a secondary action */}
          <button
            onClick={handleNoClick}
            className="w-full px-8 py-3 bg-gray-600 hover:bg-gray-500 text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Nej, jag är inte över 18
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerificationModal;
