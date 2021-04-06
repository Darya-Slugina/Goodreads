import React, { useEffect, useState, useMemo } from "react";
import styles from './Comments.module.scss';
import { Link } from "react-router-dom";
import StarRatings from 'react-star-ratings';
import { useSelector } from "react-redux";
import Button from "./../common/Button";
import firebase, { database } from "../firebase";
import moment from "moment"
import { getReviewForCurrentBookAndUser, getReviewsForCurrentBook } from "./service";


export default function Comments({ commentId, userName, userImg, date, rate, likes, review, userId, getReviews, bookId }) {

    const [text, setText] = useState(review);
    const [form, setForm] = useState(false);
    const [buttonState, setButtonState] = useState("Like");
    const [reviewBtn, setReviewBtn] = useState(true);
    const [rating, setRating] = useState(0);

    const user = useSelector((state) => state.user.user);

    const currentUser = useMemo(() => {
        if (user && userId === user.id) {
            return true;
        }
        return false;
    }, [userId, user])

    useEffect(() => {
        setText(review);
    }, [review])

    useEffect(() => {
        getReviewForCurrentBookAndUser(bookId, userId)
            .then(snapshot => {
                let review = [];
                snapshot.forEach(doc => {
                    review = doc.data();
                    if (review && review.likes && review.likes.includes(user.id)) {
                        setButtonState("Dislike");
                    }
                })

            })
    }, [user, userId, bookId, setButtonState])

    useEffect(() => {
        if (text.trim().length <= 0) {
            setReviewBtn(false);
        } else if (text.trim().length > 0) {
            setReviewBtn(true);
        }
    }, [rate, text])

    const displayForm = () => {
        setForm(!form);
    }

    const setReview = (ev) => {
        ev.preventDefault();
        getReviewForCurrentBookAndUser(bookId, userId)
            .then(snapshot => {
                let id = [];
                snapshot.forEach(doc => {
                    id = doc.id;
                })
                if (rate > 0 || (text.trim().length > 0 && text.trim().length < 5000)) {
                    
                    setReviewBtn(true);
                    database.collection("reviewsList").doc(id).update({
                        review: text,
                        rate: rating,
                    })
                        .then(() => {
                            console.log("Document successfully written!");
                            setForm(!form);
                            getReviewsForCurrentBook(bookId)
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
            })

    }

    const addLike = () => {
        if (buttonState === "Like") {
            getReviewForCurrentBookAndUser(bookId, userId)
                .then(snapshot => {
                    let id = [];
                    snapshot.forEach(doc => {
                        id = doc.id;
                    })

                    database.collection("reviewsList").doc(id).update({
                        likes: firebase.firestore.FieldValue.arrayUnion(user.id),
                    })
                        .then(() => {
                            console.log("Document successfully written!");
                            setButtonState("Dislike");

                            getReviewsForCurrentBook(bookId)
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
                })
        } else if (buttonState === "Dislike") {
            getReviewForCurrentBookAndUser(bookId, userId)
                .then(snapshot => {
                    let id = [];
                    snapshot.forEach(doc => {
                        id = doc.id;
                    })

                    database.collection("reviewsList").doc(id).update({
                        likes: firebase.firestore.FieldValue.arrayRemove(user.id),
                    })
                        .then(() => {
                            setButtonState("Like")
                            console.log("Document successfully written!");

                            getReviewsForCurrentBook(bookId)
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
                });

        }
    }


    return (
        <React.Fragment>
            <div className={currentUser ? styles.commentsContainerUser : styles.commentsContainer}>
                <div className={styles.userImgContainer}>
                    <Link to={"/user/" + userId}><img src={userImg} alt={userName} className={styles.userImg} /></Link>
                </div>
                <div className={styles.commentsInfoContainer}>
                    <div className={styles.metaInfo}>
                        <div>
                            <Link to={"/user/" + userId}><span className={styles.userName}> {userName} </span></Link>
                            <span className={styles.rating}>  rated  it </span>
                            {form ? <StarRatings
                                rating={rating}
                                starRatedColor="rgb(255, 145, 34)"
                                starHoverColor="rgb(255, 145, 34)"
                                starDimension="30px"
                                starSpacing="3px"
                                changeRating={(rating) => setRating(rating)}
                                numberOfStars={5}
                                name='rating'
                            /> :
                                <StarRatings
                                    rating={rate}
                                    starRatedColor="#e84225"
                                    starDimension="18px"
                                    starSpacing="0px"
                                    numberOfStars={5}
                                    name='rating'
                                />}
                        </div>
                        <span className={styles.date}>{moment(date).format("MMMM Do YYYY")}</span>
                    </div>
                    <div className={styles.commentInfo}>
                        {form ? (
                            <div id="form">
                                <textarea rows="6" cols="70" value={text} onInput={(ev) => { setText(ev.target.value) }} > {text}
                                </textarea>
                                {reviewBtn && <Button value={"Update your review"} onClick={setReview} />}
                            </div>
                        ) : <span className={styles.description}>{review}</span>}
                    </div>
                    <div className={styles.footerInfo}>
                        <span className={styles.likeItContainer}>
                            <span className={styles.likesCount}>{likes.length}&nbsp; likes</span>
                                    &nbsp;·&nbsp;
                                   {user.id ? <span className={styles.likeBtn} onClick={addLike} id={commentId}>{buttonState}</span> : <Link to="/login"><span className={styles.likeBtn} id={commentId}>{buttonState}</span></Link>}
                            {currentUser && <span className={styles.EditBtn} onClick={displayForm} id={commentId}> Edit </span>}
                        </span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}