import styles from './MyBooks.module.scss'
import React, { useState } from "react";
import { TiThLarge } from "react-icons/ti";
import { TiThMenu } from "react-icons/ti";
import Book from "../GenresPage/BookImg";
import { Link } from "react-router-dom";


export default function MyBooks({ books }) {

    const [isGridView, setIsGridView] = useState(true);

    const toggleView = (e) => {
        e.target.classList.add("active");
        setIsGridView(!isGridView);
    };

    return (
        <div className={styles.mainBooksBox}>
            <div className={styles.screenControls}>
                {isGridView ? (
                    <TiThLarge className={styles.icons} onClick={toggleView} />
                ) : (
                    <TiThMenu className={styles.icons} onClick={toggleView} />
                )}
            </div>
            {!books.length ? <div className={styles.noBooksInfo}> No added books yet. </div> :
                <div>
                    {isGridView ? (
                        <table className={styles.table}>
                            <thead>
                                <tr className={styles.header}>
                                    <th alt="cover" className={styles.cover}>
                                        <span className={styles.link}>cover</span>
                                    </th>
                                    <th alt="title" className={styles.title}>
                                        <span className={styles.link}>title</span>
                                    </th>
                                    <th alt="author" className={styles.author}>
                                        <span className={styles.link}>author</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map((book, index) => (
                                    <tr className={styles.body} key={index}>
                                        <td className={styles.coverInfo}>
                                            <Link to={"/books/"+book.genre +"/" + book.id}>
                                                <img className={styles.bookImg} alt={book.title} src={book.img} />
                                            </Link>
                                        </td>
                                        <td className={styles.titleInfo}>
                                            <Link to={"/books/"+book.genre +"/" + book.id} title={book.title} className={styles.link}>
                                                {book.title}
                                            </Link>
                                        </td>
                                        <td className={styles.authorInfo}>
                                            <div className="value">
                                                <Link to={"/books/"+book.genre +"/" + book.id} className={styles.link}>{book.author}</Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    ) : (
                        <div className={styles.bookImgContainer}>
                            {books.map((book) => (
                                <Book key={book.id} {...book} />
                            ))}</div>
                    )
                    }
                </div>
            }
        </div>
    )
}
