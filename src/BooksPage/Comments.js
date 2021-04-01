import React, { useState, useMemo } from "react";
import styles from './Comments.module.scss';
import { Link } from "react-router-dom";
import StarRatings from 'react-star-ratings';
import { useSelector } from "react-redux";
import Button from "./../common/Button";
import { database } from "../firebase";


export default function Comments({ commentId, userName, userImg, date, rate, likes, review, hiddenReview, userId, getReviews, bookId }) {

    const [displayComment, setDisplayComment] = useState(false);
    const [text, setText] = useState(review);
    const [form, setForm] = useState(false)
    const user = useSelector((state) => state.user.user);


    const currentUser = useMemo(() => {
        if (user && userId === user.id) {
            return true;
        }
        return false;
    }, [userId, user])


    const displayForm = () => {
        console.log("nnn");
        setForm(!form);
    }

    console.log(form);

    const displayOnScreen = () => {
        setDisplayComment(!displayComment)
    }


    // TODO: don't work adding to db after editing
    const setReview = (ev) => {
        ev.preventDefault();
        database.collection("reviewsList").where("forBookId", "==", bookId).where("userId", "==", userId).set({
            review: text,
        })
            .then(() => {
                console.log("Document successfully written!");

                database.collection("reviewsList").where("forBookId", "==", bookId).get()
                    .then((querySnapshot) => {
                        let dbReviews = [];
                        querySnapshot.forEach((doc) => {
                            dbReviews.push(doc.data());
                        });
                        getReviews(dbReviews);
                    });

            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    }

    //     addLike = (e) => {
    //         console.log(e);
    //         let currentComment = this.state.comment.filter(el => el.id === e.target.id)
    //         currentComment.likes += 1;

    //         this.setState({
    //             comment: [...this.state.comment, currentComment.likes ]
    //         })
    //     }


    return (
        <React.Fragment>
            <div className={styles.commentsContainer}>
                <div className={styles.userImgContainer}>
                    <Link to={"/user/" + userId}><img src={userImg} alt={userName} className={styles.userImg} /></Link>
                </div>
                <div className={styles.commentsInfoContainer}>
                    <div className={styles.metaInfo}>
                        <div>
                            <Link to={"/user/" + userId}><span className={styles.userName}> {userName} </span></Link>
                            <span className={styles.rating}>  rated  it </span>
                            <StarRatings
                                rating={rate}
                                starRatedColor="#e84225"
                                starDimension="18px"
                                starSpacing="0px"
                                numberOfStars={5}
                                name='rating'
                            />
                        </div>
                        <span className={styles.date}>{date}</span>
                    </div>
                    <div className={styles.commentInfo}>
                        {hiddenReview &&
                            <React.Fragment>
                                <span className={styles.description} id="review">{review}</span>
                                {displayComment ?
                                    <React.Fragment>
                                        <span className={styles.description}>{hiddenReview}</span>
                                        <span className={styles.more} onClick={displayOnScreen}>...less</span>
                                    </React.Fragment>
                                    : <span className={styles.more} onClick={displayOnScreen}>...more</span>}
                            </React.Fragment>
                        }
                        {form ? (
                            <div id="form">
                                <textarea rows="6" cols="70" value={text} onInput={(ev) => { setText(ev.target.value) }} > {text}
                                </textarea>
                                <Button value={"Publish your review"} onClick={setReview} />
                            </div>
                        ) : <span className={styles.description}>{review}</span>}
                    </div>
                    <div className={styles.footerInfo}>
                        <span className={styles.likeItContainer}>
                            <span className={styles.likesCount}>{likes}&nbsp; likes</span>
                                    &nbsp;·&nbsp;
                                    <span className={styles.likeBtn} onClick={() => { }} id={commentId}>Like </span>
                            {currentUser && <span className={styles.EditBtn} onClick={displayForm} id={commentId}> Edit </span>}
                        </span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}