import styles from "./BookImg.module.scss"
import { Link } from "react-router-dom";
import React from "react";
import SimpleRating from "../BooksPage/Rating";


export default function Book({ img, id, genre, title, description, author, rating, ratingsCount, reviewsCount }) {

  // useEffect(() => {
  //   books = React.Children.toArray(this.props.children).filter((item) => item.props.className === 'bookImg');
  //   books.forEach(el => el.addEventListener("onMouseOver", createBlock))
  // }, [])


  const onMouseEnterHandler = (e) => {
    e.target.nextSibling.style.display = "block";
  }

  const onMouseLeaveHandler = (e) => {
    e.target.nextSibling.style.display = "none";
  }

  return (
    <React.Fragment>
      <div className={styles.bookContainer}>
        <Link to={"/books/" + genre + "/" + id}>
          <img src={img} alt={id} key={id} className={styles.bookImg} onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler} />
          <div className={styles.bookInfoContainer}>
            <div className={styles.wrapper}>
              <h1 id="bookTitle" className={styles.bookInfoContainerTitle}>{title}</h1>
              <p className={styles.bookInfoContainerText}>by {author}</p>
              <div className={styles.bookMeta}>
                <div className={styles.staticRatingStars}>
                  <SimpleRating stars={rating} />
                </div>
                <span className={styles.staticRating}> {rating} rating </span>
                <div className={styles.ratingCount} > - {ratingsCount} ratings </div>
                <div className={styles.reviewCount} > - {reviewsCount} reviews </div>
              </div>
              <p className={styles.bookInfoContainerText}>{description}</p>
            </div>
          </div>
        </Link>
      </div>
    </React.Fragment>
  )
}