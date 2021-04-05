import styles from './BooksView.module.scss'
import { Link } from "react-router-dom";
import React from "react";


export default function BooksCoverView({books}) {

    const onMouseEnterHandler = (e) => {
        e.target.nextSibling.style.display = "block";
    }

    const onMouseLeaveHandler = (e) => {
        e.target.nextSibling.style.display = "none";
    }

    return (
        <div className={styles.coverViewWrapper}>
            {books.map(book => (
                <React.Fragment>
                    <div className={styles.bookCoverWrapper}>
                        <Link to={"/books/" + book.genre + "/" + book.id} key={book.id}>
                            <img src={book.img} alt={book.title} className={styles.cover} onMouseEnter={onMouseEnterHandler}
                                onMouseLeave={onMouseLeaveHandler}></img>
                            <div className={styles.bookInfoContainer}>
                                <div className={styles.wrapper}>
                                    <h1 id="bookTitle" className={styles.bookInfoContainerTitle}>{book.title}</h1>
                                    <p className={styles.bookInfoContainerText}>by {book.author}</p>
                                    <p className={styles.bookInfoContainerText}>{book.description}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </React.Fragment>
            ))}
        </div>
    )
}