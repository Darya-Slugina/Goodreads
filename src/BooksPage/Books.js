import styles from './Books.module.scss';
import '../common/DropdownMenu.scss'
import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from "react-router-dom";
import BooksList from "./BookList";
import ReviewModul from "./ReviewModul";
import Comments from "./Comments";
import DropdownButton from "../common/DroppdownButton"
import { useSelector, useDispatch } from "react-redux";
import StarRatings from 'react-star-ratings';
import { getReviewsForCurrentBook } from './service';
import { currentlyReading, removeBooksFromReadList, read, wantToRead } from '../RegistrationAndLoginPage/User.actions';


export default function Books() {

  const { currentGenre, bookId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [bookState, setBookState] = useState('Want To Read');
  const [sorter, setSorter] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const user = useSelector((state) => state.user.user);
  const books = useSelector((state) => state.books.books);

  const dispatch = useDispatch();

  const currentId = Number(bookId);
  const currentBook = books.filter(book => book.id === currentId);
  const firstBook = currentBook[0] ? currentBook[0] : {};


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [bookId])

  useEffect(() => {
    getReviewsForCurrentBook(currentId)
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

  useEffect(() => {
    if (user) {
      let state = 'Want To Read';
      if (user.currentlyReading && user.currentlyReading.filter(el => el === currentId).length > 0) {
        state = 'Currently Reading';
      } else if (user.read && user.read.filter(el => el === currentId).length > 0) {
        state = 'Read';
      }

      setBookState(state);
    }
  }, [user, currentId]);


  const changeStatus = (value) => {

    dispatch(removeBooksFromReadList(currentId, user.id))


    if (value === "CurrentlyReading") {
      dispatch(currentlyReading(currentId, user.id))

    } else if (value === "Read") {
      dispatch(read(currentId, user.id))

    } else if (value === "WantToRead") {
      dispatch(wantToRead(currentId, user.id))
    }
  }

  const showSorters = () => {
    setIsActive(!isActive);
  }

  const sortedReviews = useMemo(() => {
    if (!sorter) return reviews;

    if (sorter === 'ratingAscengind') {
      return reviews.sort((a, b) => b.rate - a.rate);
    }

    if (sorter === 'ratingDescending') {
      return reviews.sort((a, b) => a.rate - b.rate);
    }

    if (sorter === 'dateAscenging') {
      return reviews.sort((a, b) => b.date - a.date);
    }

    if (sorter === 'dateDescending') {
      return reviews.sort((a, b) => a.date - b.date);
    }
  }, [sorter, reviews])

  return (
    <div className={styles.mainContentContainer} >
      <div className={styles.mainContent}>
        <div className={styles.leftContainer}>
          <div className={styles.imgCol}>
            <img className={styles.coverImage} src={firstBook.img} alt={firstBook.title} />
            {user.id ? <DropdownButton className={styles.ratingButton} onClick={changeStatus} bookState={bookState} setBookState={setBookState} /> : <Link to="/login"><DropdownButton className={styles.ratingButton} bookState={bookState} /></Link>}
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
          <div className={styles.h2Container} id={"reviews"}>
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
              <div className={isActive ? styles.sorterContainerActive : styles.sorterContainer}>
                <div>
                  <span className={styles.sortOption} onClick={() => setSorter('ratingAscengind')}>Highest rating</span>
                  <span className={styles.sortOption} onClick={() => setSorter('ratingDescending')}>Lowest rating</span>
                </div>
                <div>
                  <span className={styles.sortOption} onClick={() => setSorter('dateAscenging')}>Newest rating</span>
                  <span className={styles.sortOption} onClick={() => setSorter('dateDescending')}>Oldest rating</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.h2Container}>
            {!isHavaReview && <ReviewModul bookId={currentId} getReviews={setReviews} />}
          </div>
          <div className={styles.h2Container}>
            {sortedReviews.map(review => (
              <Comments key={review.date} {...review} getReviews={setReviews} bookId={currentId} />
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}