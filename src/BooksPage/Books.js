import styles from './Books.module.scss';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import BooksList from "./BookList";
import ReviewModul from "./ReviewModul";
import SimpleRating from "./Rating";
import Comments from "./Comments";
import DropdownButton from "../common/DroppdownButton"
import { database } from "../firebase";


export default function Books({ books }) {

  const { currentGenre, bookId } = useParams();

  const [isItRated, setIsItRated] = useState(false);
  const [reviews, setReviews] = useState([]);

  const currentId = Number(bookId);
  const currentBook = books.filter(book => book.id === currentId);
  const firstBook = currentBook[0] ? currentBook[0] : {};


  useEffect(() => {
    database.collection("reviewsList").where("forBookId", "==", currentId).get()
      .then((querySnapshot) => {
        let dbReviews = [];
        querySnapshot.forEach((doc) => {
          dbReviews.push(doc.data());
        });
        setReviews(dbReviews);
      });
  }, [currentId]);


  const showSorters = (e) => {
    e.target.nextSibling.classList.toggle("show");
  }

  const ascendingSort = () => {
    // comments.sort((a, b) => a.rate - b.rate);
    // setComments(comments);
  }

  const descendingSort = () => {
    // comments.sort((a, b) => b.rate - a.rate);
    // setComments(comments);
  }

  const changeRating = () => {
    setIsItRated(true);
  }

  return (
    <div className={styles.mainContentContainer} >
      <div className={styles.mainContent}>
        <div className={styles.leftContainer}>
          <div className={styles.imgCol}>
            <img className={styles.coverImage} src={firstBook.img} alt={firstBook.title} />
            <DropdownButton className={styles.ratingButton} />
            {/* <button className={styles.ratingButton}>Want to Read</button> */}
            <div className={styles.rating} id="rating">
              <div className={styles.ratingText}>{isItRated ? "My rating" : "Rate this book"}</div>
              <div className={styles.clearRating}>Clear rating</div>
              <div className={styles.ratingCenter}>
                <SimpleRating stars={0} active={true} big={false} onChange={changeRating} />
              </div>
            </div>
          </div>
          <div className={styles.mainInfoContainer}>
            <div className={styles.mainInfo}>
              <h1 id="bookTitle" className={styles.bookTitle}>
                {firstBook.title}
              </h1>
              <div id="bookAuthor" className={styles.bookAuthor}>
                <span>by&nbsp;</span>
                <span>{firstBook.author}</span>
              </div>
            </div>
            <div className={styles.bookMeta}>
              <div className={styles.staticRatingStars}>
                <SimpleRating stars={firstBook.rating} />
              </div>
              <span className={styles.staticRating}> {firstBook.rating} </span>
              <div className={styles.ratingCount} > {firstBook.ratingsCount} ratings </div>
              <div className={styles.reviewCount} > {firstBook.reviewsCount} reviews </div>
            </div>
            <div id="description" className={styles.description}>
              <span >{firstBook.description}</span>
            </div>
            <div id="details" className={styles.moreDetails}>
              <div><span>{firstBook.info}</span></div>
              <div> {firstBook.published}</div>
            </div>
          </div>
        </div>
        <div className={styles.bigBox}>
          <div className={styles.h2Container}>
            <h2 className={styles.h2Title}>
              See similar books
            </h2>
            <div className={styles.moreBooksContainer}>
              <BooksList books={books} genre={currentGenre} isShuffled={true} length={6} />
            </div>
          </div>
          <div className={styles.h2Container}>
            <h2 className={styles.h2Title}>Community Reviews</h2>
            <div className={styles.bookMeta}>
              <div className={styles.staticRatingStars}>
                <SimpleRating stars={firstBook.rating} />
              </div>
              <span className={styles.staticRating}> {firstBook.rating} </span>
              <div className={styles.ratingCount} > {firstBook.ratingsCount} ratings </div>
              <div className={styles.reviewCount} > {firstBook.reviewsCount} reviews </div>
              <span className={styles.sortComment} onClick={showSorters}>Sort order</span>
              <div className={styles.sorterContainer}>
                <span className={styles.sortOption} onClick={ascendingSort}>Heighest rating</span>
                <span className={styles.sortOption} onClick={descendingSort}>Lowest rating</span>
              </div>
            </div>
          </div>
          <div className={styles.h2Container}>
            <ReviewModul />
          </div>
          <div className={styles.h2Container}>
            {reviews.map(review => (
              <Comments key={review.commentId} {...review} />
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}