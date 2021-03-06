import styles from './Genres.module.scss';
import { useParams, Link } from "react-router-dom";
import Book from "./BookImg";
import Button from "./../common/Button";
import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { countOfMostWantedBoooks } from "../Constants";
import { addGenre, removeGenre } from '../RegistrationAndLoginPage/User.actions';



export default function Genres() {

  const { currentGenre } = useParams();
  const [buttonState, setButtonState] = useState("Add to favourite");
  const user = useSelector((state) => state.user.user);
  const books = useSelector((state) => state.books.books);
  const genresList = useSelector((state) => state.genres.genres);

  const dispatch = useDispatch();

  let thisGenre = genresList.filter(el => el.genre.toLowerCase() === currentGenre);
  const currentBooks = books.filter(el => el.genre.toLowerCase() === currentGenre);

  const mostWanted = [...books];
  mostWanted.sort(() => Math.random() - 0.5);
  mostWanted.length = countOfMostWantedBoooks;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (user && user.favouriteGenres && user.favouriteGenres.includes(currentGenre)) {
      setButtonState("Remove from favourite");
    }
  }, [user, currentGenre])

  const addToFavourite = () => {
    if (user.id) {

      if (buttonState === "Add to favourite") {
        setButtonState("Remove from favourite")
        dispatch(addGenre(user.id, currentGenre))
      } else if (buttonState === "Remove from favourite") {
        setButtonState("Add to favourite")
        dispatch(removeGenre(user.id, currentGenre))
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
          {user.id &&
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
