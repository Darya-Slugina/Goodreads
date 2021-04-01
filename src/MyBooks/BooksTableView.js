import { useSelector } from "react-redux";
import styles from './BooksView.module.scss'
import { Link } from "react-router-dom";
import SimpleRating from "../BooksPage/Rating";
import { useEffect } from "react";

export default function BooksTable({ books }) {

    console.log(books)
    

    const onMouseEnterHandler = (e) => {
        e.target.nextSibling.style.display = "block";
    }

    const onMouseLeaveHandler = (e) => {
        e.target.nextSibling.style.display = "none";
    }

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th className={styles.heading}>cover</th>
                    <th className={styles.heading}>title</th>
                    <th className={styles.heading}>author</th>
                    <th className={styles.heading}>shelves</th>
                </tr>
            </thead>
            <tbody>
                {books.map(book => (
                    <tr className={styles.row} key={book.id}>
                        <td className={styles.bookCoverWrapper}>
                            <Link to={"/books/" + book.genre + "/" + book.id} key={book.id}>
                                <img src={book.img} alt={book.title} onMouseEnter={onMouseEnterHandler}
                                    onMouseLeave={onMouseLeaveHandler}></img>
                                <div className={styles.bookInfoContainer}>
                                    <div className={styles.wrapper}>
                                        <h1 id="bookTitle" className={styles.bookInfoContainerTitle}>{book.title}</h1>
                                        <p className={styles.bookInfoContainerText}>by {book.author}</p>
                                        <div className={styles.bookMeta}>
                                            <div className={styles.staticRatingStars}>
                                                {/* error - expects a string, gets an object */}
                                                {/* <SimpleRating stars={book.rating} /> */}
                                            </div>
                                            <span className={styles.staticRating}> {book.rating} rating </span>
                                            <div className={styles.ratingCount} > - {book.ratingsCount} ratings </div>
                                            <div className={styles.reviewCount} > - {book.reviewsCount} reviews </div>
                                        </div>
                                        <p className={styles.bookInfoContainerText}>{book.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </td>
                        <td><p>{book.title}</p></td>
                        <td><p>{book.author}</p></td>
                        <td><p>N/A</p></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}