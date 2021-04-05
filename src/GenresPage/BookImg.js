import styles from "./BookImg.module.scss"
import { Link } from "react-router-dom";
import React, {useMemo, useState, useEffect} from "react";
import StarRatings from 'react-star-ratings';
import { database } from "../firebase";
import {getReviewsForCurrentBook} from "./service"


export default function Book({ img, id, genre, title, description, author, rating, }) {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviewsForCurrentBook(id)
    // database.collection("reviewsList").where("forBookId", "==", id).get()
      .then((querySnapshot) => {
        let dbReviews = [];
        querySnapshot.forEach((doc) => {
          dbReviews.push(doc.data());
        });
        setReviews(dbReviews);
      });
  }, [id]);

  const reviewsCount = useMemo(() => {
    return reviews.filter(el => el.review).length;
  }, [reviews])

  const ratingsCount = useMemo(() => {
    return reviews.filter(el => el.rate).length;
  }, [reviews])

  const avgRate = useMemo(() => {
    if (reviews && ratingsCount) {
      return Number((reviews.reduce((acc, el) => acc + el.rate, 0) / ratingsCount).toFixed(2));
    }
    return 0;
  }, [reviews, ratingsCount])

  const onMouseEnterHandler = (e) => {
    e.target.nextSibling.style.display = "block";
  }

  const onMouseLeaveHandler = (e) => {
    e.target.nextSibling.style.display = "none";
  }

  return (
    <React.Fragment>
      <div className={styles.bookContainer}>
        <Link to={"/books/" + genre + "/" + id}>
          <img src={img} alt={id} key={id} className={styles.bookImg} onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler} />
          <div className={styles.bookInfoContainer}>
            <div className={styles.wrapper}>
              <h1 id="bookTitle" className={styles.bookInfoContainerTitle}>{title}</h1>
              <p className={styles.bookInfoContainerText}>by {author}</p>
              <div className={styles.bookMeta}>
                <div className={styles.staticRatingStars}>
                  <StarRatings
                    rating={avgRate}
                    starRatedColor="#e84225"
                    starDimension="18px"
                    starSpacing="0px"
                    numberOfStars={5}
                    name='rating'
                  />
                </div>
                <span className={styles.staticRating}> {avgRate} rating </span>
                <div className={styles.ratingCount} > - {ratingsCount} ratings </div>
                <div className={styles.reviewCount} > - {reviewsCount} reviews </div>
              </div>
              <p className={styles.bookInfoContainerText}>{description}</p>
            </div>
          </div>
        </Link>
      </div>
    </React.Fragment>
  )
}