import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  iconClassName?: string;
  fillColor?: string;
  emptyColor?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  iconClassName = "h-4 w-4",
  fillColor = "text-accent",
  emptyColor = "text-muted"
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, index) => (
        <Star
          key={`full-${index}`}
          className={`${iconClassName} ${fillColor}`}
          fill="currentColor"
        />
      ))}
      
      {/* Half star */}
      {hasHalfStar && (
        <div className="relative">
          <Star
            className={`${iconClassName} ${emptyColor}`}
          />
          <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
            <Star
              className={`${iconClassName} ${fillColor}`}
              fill="currentColor"
            />
          </div>
        </div>
      )}
      
      {/* Empty stars */}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <Star
          key={`empty-${index}`}
          className={`${iconClassName} ${emptyColor}`}
        />
      ))}
    </div>
  );
};

export default StarRating;