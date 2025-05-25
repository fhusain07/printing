// src/components/ui/StarRating.tsx
import React, { useCallback } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

interface StarRatingProps {
  rating: number; // e.g., 4.5
  max?: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  max = 5,
  className = "",
}) => {
  const getStars = useCallback(() => {
    const stars = [];

    for (let i = 1; i <= max; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(
          <FaStar key={i} className={`text-orange-500 ${className}`} />,
        );
      } else if (i - rating <= 0.5) {
        stars.push(
          <FaStarHalfAlt key={i} className={`text-orange-500 ${className}`} />,
        );
      } else {
        stars.push(
          <FaRegStar key={i} className={`text-orange-500 ${className}`} />,
        );
      }
    }
    return stars;
  }, [className, max, rating]);

  return <div className="inline-flex items-center gap-[1px]">{getStars()}</div>;
};

export default StarRating;
