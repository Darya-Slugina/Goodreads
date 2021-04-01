import styles from "./Form.module.css";
import Button from "./../common/Button";
import React, { useState } from 'react';
import { database } from "../firebase";
import { useSelector } from "react-redux";



export default function Form({ bookId, getReviews, rating }) {

    const [text, setText] = useState("");
    const user = useSelector((state) => state.user.user);
    console.log(user);

    const setReview = (ev) => {
        ev.preventDefault();
        database.collection("reviewsList").doc().set({
            review: text,
            date: Date.now(),
            forBookId: bookId,
            likes: [],
            rate: rating,
            userId: user.id,
            userImg: user.userImg,
            userName: user.fname,
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

    return (
        <div className={styles.formContainer} id="form">
            <textarea rows="6" cols="70" value={text} onInput={(ev) => { setText(ev.target.value) }} />
            <Button value={"Publish your review"} onClick={setReview} />
        </div>
    )
};