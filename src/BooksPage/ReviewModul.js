import React from "react";
import styles from './Review.module.css';
import userPic from "./../img/userPic.png";
import Form from "./Form";
import { useState } from "react";
import StarRatings from 'react-star-ratings';


export default function ReviewModul({ bookId, getReviews }) {

    const [form, setForm] = useState(false)
    const [rating, setRating] = useState(0);

    const displayForm = () => {
        setForm(!form);
    }

    return (
        <div className={styles.reviewContainer}>
            <div className={styles.reviewCta}>
                <img className={styles.prifileIcon} src={userPic} alt="" />
            </div>
            <div className={styles.reviewCtaRight}>
                <div className={styles.reviewCtaLabel}>
                    <span >Start your review of </span>
                    <span >Rules</span>
                </div>
                <div className={styles.reviewCtaControls}>
                    <StarRatings
                        rating={rating}
                        starRatedColor="rgb(255, 145, 34)"
                        starHoverColor="rgb(255, 145, 34)"
                        starDimension="30px"
                        starSpacing="3px"
                        changeRating={(rating) => setRating(rating)}
                        numberOfStars={5}
                        name='rating'
                    />
                    <button className={styles.reviewButton} onClick={displayForm}> Write a review</button>
                </div>
                <div className={styles.ownReviewContainer}>
                    {form && <Form bookId={bookId} getReviews={getReviews} rating={rating}/>}
                </div>
            </div>
        </div>
    )
}