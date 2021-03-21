import React from 'react';
import StarRatings from 'react-star-ratings';

export default function SimpleRating({stars}) {
  return (
    <div>
      <StarRatings
        rating={stars}
        starRatedColor="#e84225"
        starDimension="18px"
        starSpacing="0px"
        // changeRating={(rating) => this.props.dispatch( this.setValue(rating) )}
        numberOfStars={5}
        name='rating'
      />
    </div>
  );
}


