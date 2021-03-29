import styles from './Genres.module.scss';
import { useParams, Link } from "react-router-dom";
import Book from "./BookImg";
import Button from "./../common/Button";
import React from 'react';


export default function Genres({ isLoggedIn, genresList, books }) {

  const { currentGenre } = useParams();

  let thisGenre = genresList.filter(el => el.genre.toLowerCase() === currentGenre); // []
  console.log(thisGenre);
  const currentBooks = books.filter(el => el.genre.toLowerCase() === currentGenre);

  const mostWanted = [...books];
  mostWanted.sort(() => Math.random() - 0.5);
  mostWanted.length = 12; //Magic number

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
                <Button value={"Add to favourite"} />
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
