import React, { useState } from "react";
import styles from './Review.module.scss';
import userPic from "./../img/userPic.png";
import Form from "./Form";
import StarRatings from 'react-star-ratings';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "./../common/Button";


export default function ReviewModul({ bookId, getReviews }) {

    const [form, setForm] = useState(false)
    const [rating, setRating] = useState(0);

    const user = useSelector((state) => state.user.user);

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
                    {user.id ? <StarRatings
                        rating={rating}
                        starRatedColor="rgb(255, 145, 34)"
                        starHoverColor="rgb(255, 145, 34)"
                        starDimension="30px"
                        starSpacing="3px"
                        changeRating={(rating) => setRating(rating)}
                        numberOfStars={5}
                        name='rating'
                    /> : <Link to="/login"><StarRatings
                        rating={rating}
                        starRatedColor="rgb(255, 145, 34)"
                        starHoverColor="rgb(255, 145, 34)"
                        starDimension="30px"
                        starSpacing="3px"
                        numberOfStars={5}
                        name='rating'
                    /></Link> }
                    {user.id? <Button value={"Write a review"}  onClick={displayForm} /> : <Link to="/login"><Button value={"Write a review"} /></Link>}
                </div>
                <div className={styles.ownReviewContainer}>
                    {form && <Form bookId={bookId} getReviews={getReviews} rating={rating} />}
                </div>
            </div>
        </div>
    )
}