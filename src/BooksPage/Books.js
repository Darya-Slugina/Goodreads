import styles from './Books.module.scss';
import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from "react-router-dom";
import BooksList from "./BookList";
import ReviewModul from "./ReviewModul";
import SimpleRating from "./Rating";
import Comments from "./Comments";
// import books from "./../Data/Books/Books"
import DropdownButton from "../common/DroppdownButton"
import { database } from "../firebase";


export default function Books() {

  // const [value, setValue] = useState(2);

  const { currentGenre, bookId } = useParams();

  console.log(bookId)
  let currentId = Number(bookId);

  const [isItRated, setIsItRated] = useState(false);
  const [books, setBooks] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [comments, setComments] = useState([]);


  // useEffect(() => {
  database.collection("books").where("id", "==", currentId).get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let book = doc.data();

        console.log(book);
        setBooks(book);
      })
    })
// },  []);

// useEffect(() => {
//   database.collection("reviewsList").get()
//     .then((querySnapshot) => {
//       let dbReviews = [];
//       querySnapshot.forEach((doc) => {
//         dbReviews.push(doc.data());
//       });
//       setReviews(dbReviews);
//     });
// }, [bookId]);

// console.log(books);

// const { thisBook, shuffled } = useMemo(() => {
const genre = books.filter(el => el.genre.toLowerCase() === currentGenre.toLowerCase());
const thisBook = genre.filter(el => el.id === bookId);
const commentsForBook = reviews.filter(el => el.forBookId === bookId);
setComments(commentsForBook);

console.log(comments);
console.log(thisBook);

const shuffled = [...genre];
shuffled.sort(() => Math.random() - 0.5);
shuffled.length = 6; //Magic number

console.log(shuffled);

//   return { thisBook, shuffled }
// }, [bookId, books, comments, currentGenre, reviews])


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


// React hooks
//  const [inputValue, setInputValue] = useState();

return (
  <div className={styles.mainContentContainer} >
    <div className={styles.mainContent}>
      <div className={styles.leftContainer}>
        <div className={styles.imgCol}>
          <img className={styles.coverImage} src={thisBook[0].img} alt={thisBook[0].title} />
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
          {comments.map(review => (
            <Comments key={review.commentId} {...review} />
          ))}

        </div>
      </div>
    </div>
  </div>
)
    }