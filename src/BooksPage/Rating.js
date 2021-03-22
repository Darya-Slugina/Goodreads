import React from 'react';
import StarRatings from 'react-star-ratings';

export default function SimpleRating({ stars, active }) {

  // const changeRating = (newRating, name) => {
  //   this.setState({
  //     rating: newRating
  //   });
  // }

  const setNewRating = (rating) => this.props.dispatch( this.setRating(rating) )
  
  return (
    <span>
      {active ?
        <React.Fragment>
          <StarRatings
            rating={stars}
            starRatedColor="#e84225"
            starDimension="18px"
            starSpacing="0px"
            changeRating={setNewRating}
            numberOfStars={5}
            name='rating'
          />
        </React.Fragment> :
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


