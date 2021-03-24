import styles from './Books.module.scss';
import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import BooksList from "./BookList";
import ReviewModul from "./ReviewModul";
import SimpleRating from "./Rating";
import Comments from "./Comments";
import books from "./../Data/Books/Books"
// import DropdownButton from "../common/DroppdownButton"


export default function Books() {

  // const [value, setValue] = useState(2);

  const { currentGenre, bookId } = useParams();
  console.log(bookId, currentGenre);


  const genre = books.filter(el => el.genre.toLowerCase() === currentGenre);
  const thisBook = genre.filter(el => el.id === Number(bookId));
  console.log(thisBook);


  const shuffled = [...genre];
  shuffled.sort(() => Math.random() - 0.5);
  shuffled.length = 6; //Magic number


  // TODO: don't work
  const changeButton = (e) => {
    console.log(e)
    e.target.classList.remove("ratingButton");
    e.target.classList.add("ratingButtonClicked");
  }



  // React hooks
  //  const [inputValue, setInputValue] = useState();

  return (
    <div className={styles.mainContentContainer} >
      <div className={styles.mainContent}>
        <div className={styles.leftContainer}>
          <div className={styles.imgCol}>
            <img className={styles.coverImage} src={thisBook[0].img} alt={thisBook[0].title} />
            {/* <DropdownButton className={styles.ratingButton}/> */}
            <button className={styles.ratingButton} onClick={changeButton}>Want to Read</button>
            <div className={styles.rating} id="rating">
              <div className={styles.ratingText}>Rate this book</div>
              <div className={styles.clearRating}>Clear rating</div>
              <div className={styles.ratingCenter}>
                <SimpleRating stars={0} active={true} big={false}/>
              </div>
            </div>
          </div>
          <div className={styles.mainInfoContainer}>
            <div className={styles.mainInfo}>
              <h1 id="bookTitle" className={styles.bookTitle}>
                {thisBook[0].title}
              </h1>
              <div id="bookAuthor" className={styles.bookAuthor}>
                <span>by&nbsp;</span>
                <span>{thisBook[0].author}</span>
              </div>
            </div>
            <div className={styles.bookMeta}>
              <div className={styles.staticRatingStars}>
                <SimpleRating stars={thisBook[0].rating} />
              </div>
              <span className={styles.staticRating}> {thisBook[0].rating} </span>
              <div className={styles.ratingCount} > {thisBook[0].ratingsCount} ratings </div>
              <div className={styles.reviewCount} > {thisBook[0].reviewsCount} reviews </div>
            </div>
            <div id="description" className={styles.description}>
              <span >{thisBook[0].description}</span>
            </div>
            <div id="details" className={styles.moreDetails}>
              <div><span>{thisBook[0].info}</span></div>
              <div> {thisBook[0].published}</div>
            </div>
          </div>
        </div>
        <div className={styles.bigBox}>
          <div className={styles.h2Container}>
            <h2 className={styles.h2Title}>
              See similar books
            </h2>
            <div className={styles.moreBooksContainer}>
              <BooksList books={shuffled} />
            </div>
          </div>
          <div className={styles.h2Container}>
            <h2 className={styles.h2Title}>Community Reviews</h2>
            <div className={styles.bookMeta}>
              <div className={styles.staticRatingStars}>
                <SimpleRating stars={thisBook[0].rating} />
              </div>
              <span className={styles.staticRating}> {thisBook[0].rating} </span>
              <div className={styles.ratingCount} > {thisBook[0].ratingsCount} ratings </div>
              <div className={styles.reviewCount} > {thisBook[0].reviewsCount} reviews </div>
              <span className={styles.sortComment}>Sort order</span>
            </div>
          </div>
          <div className={styles.h2Container}>
            <ReviewModul />
          </div>
          <div className={styles.h2Container}>
            <Comments comments={thisBook[0].reviews} />
          </div>
        </div>
      </div>
    </div>
  )
}