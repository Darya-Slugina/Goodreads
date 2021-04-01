import styles from './Genres.module.scss';
import { useParams, Link } from "react-router-dom";
import Book from "./BookImg";
import Button from "./../common/Button";
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import firebase, { database } from "../firebase";
import { useEffect } from 'react';


export default function Genres({ isLoggedIn, genresList, books }) {

  const { currentGenre } = useParams();
  const [buttonState, setButtonState] = useState("Add to favourite");
  const user = useSelector((state) => state.user.user);

  let thisGenre = genresList.filter(el => el.genre.toLowerCase() === currentGenre); 
  const currentBooks = books.filter(el => el.genre.toLowerCase() === currentGenre);

  const mostWanted = [...books];
  mostWanted.sort(() => Math.random() - 0.5);
  mostWanted.length = 12; //Magic number


  //  TODO: some change, have bug on refresh
  useEffect(()=> {
    if(user && user.favouriteGenres && user.favouriteGenres.includes(currentGenre)){
      setButtonState("Remove from favourite");
    }
  }, [user, currentGenre])

  const addToFavourite = () => {
    if (user) {

      if (buttonState === "Add to favourite") {
        setButtonState("Remove from favourite")

        database.collection("users").doc(user.id).update({
          favouriteGenres: firebase.firestore.FieldValue.arrayUnion(currentGenre),
        })
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      } else if (buttonState === "Remove from favourite"){
        setButtonState("Add to favourite")
        database.collection("users").doc(user.id).update({
          favouriteGenres: firebase.firestore.FieldValue.arrayRemove(currentGenre),
        })
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      }
    }
  }

  let firstGenre = thisGenre[0] ? thisGenre[0] : {};

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContent}>
        <div className={styles.breadcrumbs}>
          <Link to="/genres" className={styles.link}>Genres</Link> &gt; <Link to={"/genres/" + currentGenre} className={styles.link}>{firstGenre.genre}</Link>
        </div>
        <div className={styles.genreHeader}>
          <h1 className={styles.left}> {firstGenre.genre} </h1>
          {isLoggedIn &&
            <div className={styles.right}>
              <div className={styles.favoriteGenresButtonContainer}>
                <Button value={buttonState} onClick={addToFavourite} />
              </div>
            </div>}
          <div className={styles.reviewText}>
            <span>{firstGenre.description}</span>
          </div>
          <br />
          <div className={styles.coverBigBox}>
            <div className={styles.h2Container}>
              <h2 className={styles.h2Genre}>New Releases Tagged "{currentGenre}"</h2>
            </div>
            <div className={styles.bigBoxBody}>
              {currentBooks.map((book) => (
                <Book key={book.id} genre={currentGenre} {...book} />
              ))}
            </div>
          </div>
          <div className={styles.coverBigBox}>
            <div className={styles.h2Container}>
              <h2 className={styles.h2Genre}>Most Read This Week</h2>
            </div>
            <div className={styles.bigBoxBody}>
              {mostWanted.map((book) => (
                <Book key={book.id} {...book} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
