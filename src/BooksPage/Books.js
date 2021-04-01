import styles from './Books.module.scss';
import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from "react-router-dom";
import BooksList from "./BookList";
import ReviewModul from "./ReviewModul";
import Comments from "./Comments";
import DropdownButton from "../common/DroppdownButton"
import firebase, { database } from "../firebase";
import { useSelector } from "react-redux";
import StarRatings from 'react-star-ratings';


export default function Books({ books }) {

  const { currentGenre, bookId } = useParams();

  const [reviews, setReviews] = useState([]);
  const user = useSelector((state) => state.user.user);

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

  const reviewsCount = useMemo(() => {
    return reviews.filter(el => el.review).length;
  }, [reviews])

  const ratingsCount = useMemo(() => {
    return reviews.filter(el => el.rate).length;
  }, [reviews])

  const avgRate = useMemo(() => {
    if (reviews && ratingsCount) {
      return Number((reviews.reduce((acc, el) => acc + el.rate, 0) / ratingsCount).toFixed(2));
    }
    return 0;
  }, [reviews, ratingsCount])

  const isHavaReview = reviews.filter(el => el.userId === user.id && el.forBookId === currentId).length > 0;

  const bookState = useMemo(() => {
    if (user) {
      let state = 'Want To Read';
      console.log("state!!!", user.currentlyReading, user.read, user, user['currentlyReading']);

      if (user.currentlyReading && user.currentlyReading.filter(el => el === bookId).length > 0) {
        console.log("currentlyReading", user.read.filter(el => el === bookId).length);
        state = 'Currently Reading';
      } else if (user.read && user.read.filter(el => el === bookId).length > 0) {
        console.log("read", user.read.filter(el => el === bookId).length);
        state = 'Read';
      }

      console.log("state!!!222", state)

      return state;
    }
  }, [user, bookId])


  function removeFromReadList() {

    database.collection("users").doc(user.id).update({
      read: firebase.firestore.FieldValue.arrayRemove(currentId),
      wantToRead: firebase.firestore.FieldValue.arrayRemove(currentId),
      currentlyReading: firebase.firestore.FieldValue.arrayRemove(currentId),
    })
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }

  const changeStatus = (value) => {

    if (bookState) {
      removeFromReadList()
    }

    if (value === "CurrentlyReading") {
      database.collection("users").doc(user.id).update({
        currentlyReading: firebase.firestore.FieldValue.arrayUnion(currentId),
      })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });

    } else if (value === "Read") {
      database.collection("users").doc(user.id).update({
        read: firebase.firestore.FieldValue.arrayUnion(currentId),
      })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    } else if (value === "WantToRead") {
      database.collection("users").doc(user.id).update({
        wantToRead: firebase.firestore.FieldValue.arrayUnion(currentId),
      })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    }
  }

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

  const newest = () => {
    reviews.sort((a, b) => a.date - b.date);
    setReviews(reviews);
  }

  const oldest = () => {
    reviews.sort((a, b) => b.date - a.date);
    setReviews(reviews);
  }


  return (
    <div className={styles.mainContentContainer} >
      <div className={styles.mainContent}>
        <div className={styles.leftContainer}>
          <div className={styles.imgCol}>
            <img className={styles.coverImage} src={firstBook.img} alt={firstBook.title} />
            <DropdownButton className={styles.ratingButton} onClick={changeStatus} bookState={bookState} />
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
                <StarRatings
                  rating={avgRate}
                  starRatedColor="#e84225"
                  starDimension="18px"
                  starSpacing="0px"
                  numberOfStars={5}
                  name='rating'
                />
              </div>
              <span className={styles.staticRating}> {avgRate} </span>
              <div className={styles.ratingCount} > {ratingsCount} ratings </div>
              <div className={styles.reviewCount} > {reviewsCount} reviews </div>
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
                <StarRatings
                  rating={avgRate}
                  starRatedColor="#e84225"
                  starDimension="18px"
                  starSpacing="0px"
                  numberOfStars={5}
                  name='rating'
                />
              </div>
              <span className={styles.staticRating}> {avgRate} </span>
              <div className={styles.ratingCount} > {ratingsCount} ratings </div>
              <div className={styles.reviewCount} > {reviewsCount} reviews </div>
              <span className={styles.sortComment} onClick={showSorters}>Sort order</span>
              <div className={styles.sorterContainer}>
                <div>
                  <span className={styles.sortOption} onClick={ascendingSort}>Heighest rating</span>
                  <span className={styles.sortOption} onClick={descendingSort}>Lowest rating</span>
                </div>
                <div>
                  <span className={styles.sortOption} onClick={newest}>Newest rating</span>
                  <span className={styles.sortOption} onClick={oldest}>Oldest rating</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.h2Container}>
            {!isHavaReview && <ReviewModul bookId={currentId} getReviews={setReviews} />}
          </div>
          <div className={styles.h2Container}>
            {reviews.map(review => (
              <Comments key={review.commentId} {...review} getReviews={setReviews} bookId={currentId}/>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}