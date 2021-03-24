import React from 'react';
import StarRatings from 'react-star-ratings';
import { useState } from 'react';

export default function SimpleRating({ stars, active, big }) {

  const [rating, setRating] = useState(0);

  return (
    <span>
      {active && big &&
        <StarRatings
          rating={rating}
          starRatedColor="rgb(255, 145, 34)"
          starHoverColor="rgb(255, 145, 34)"
          starDimension="30px"
          starSpacing="3px"
          changeRating={(rating) => setRating(rating)}
          numberOfStars={5}
          name='rating'
        />}
      {active && !big &&
        <StarRatings
          rating={rating}
          starRatedColor="#e84225"
          starDimension="18px"
          starSpacing="0px"
          changeRating={(rating) => setRating(rating)}
          numberOfStars={5}
          name='rating'
        />
      }
      {!active && !big &&
        <StarRatings
          rating={stars}
          starRatedColor="#e84225"
          starDimension="18px"
          starSpacing="0px"
          numberOfStars={5}
          name='rating'
        />
      }
    </span>
  );
}


