import styles from "./Form.module.scss";
import Button from "./../common/Button";
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { setNewReview } from "./service"
import { getReviewsForCurrentBook } from "../GenresPage/service";


export default function Form({ bookId, getReviews, rating }) {

    const [text, setText] = useState("");
    const [reviewBtn, setReviewBtn] = useState(false)
    const user = useSelector((state) => state.user.user);


    useEffect(() => {
        if (rating > 0 || (text.trim().length > 0 && text.trim().length < 5000)) {
            setReviewBtn(true);
        } else if (rating <= 0 || text.trim().length <= 0) {
            setReviewBtn(false);
        }
    }, [rating, text])

    const setReview = (ev) => {
        ev.preventDefault();

        setNewReview(text, bookId, rating, user.id, user.userImg, user.fname)
            .then(() => {
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
    }

    return (
        <div className={styles.formContainer}>
            <textarea rows="6" cols="70" value={text} onInput={(ev) => { setText(ev.target.value) }} />
            {reviewBtn && <Button value={"Publish your review"} onClick={setReview} />}
        </div>
    )
};