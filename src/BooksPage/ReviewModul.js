import React from "react";
import styles from './Review.module.css';
import StarRatings from 'react-star-ratings';
import userPic from "./../img/userPic.png";
import Form from "./Form";
import SimpleRating from "./Rating";

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
                        <SimpleRating stars={0} active={true} big={true} />
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