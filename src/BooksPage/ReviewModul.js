import React from "react";
import styles from './Review.module.css';
import StarRatings from 'react-star-ratings';
import userPic from "./../img/userPic.png";
import Form from "./Form";

class ReviewModul extends React.Component {
    state = {
        displayForm: false
    }

    displayForm = () => {
        this.setState({
            displayForm: !this.state.displayForm
        })
    }

    render() {
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
                            rating={0}
                            starRatedColor="rgb(255, 145, 34)"
                            starHoverColor="rgb(255, 145, 34)"
                            starDimension="30px"
                            starSpacing="3px"
                            changeRating={(rating) => this.props.dispatch(this.setValue(rating))}
                            numberOfStars={5}
                            name='rating'
                        />
                        <button className={styles.reviewButton} onClick={this.displayForm}> Write a review</button>
                    </div>
                    <div className={styles.ownReviewContainer}>
                        {this.state.displayForm && <Form />}
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewModul;