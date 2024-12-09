import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1;

    if (rating >= starValue) {
      return <FaStar key={index} className="text-yellow-500" />;
    } else if (rating >= starValue - 0.5) {
      return <FaStarHalfAlt key={index} className="text-yellow-500" />;
    } else {
      return <FaRegStar key={index} className="text-gray-300" />;
    }
  });

  return <div className="flex items-center">{stars}</div>;
};

export default StarRating;
