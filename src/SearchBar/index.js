import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./SearchBar.module.scss";
import { Link } from "react-router-dom";

export default function SearchBar() {
    const books = useSelector((state) => state.books.books);

    const [booksToDisplay, setBooksToDisplay] = useState([])

    const onSearch = (ev) => {
        let value = ev.target.value.toLowerCase()

        if(value){
            let filteredBooks = books.filter(book => book.title.toLowerCase().includes(value) || book.author.toLowerCase().includes(value));
            setBooksToDisplay(filteredBooks)
        } else {
            setBooksToDisplay([])
        }
    }

    return (
        <div className={styles.searchBarWrapper}>
            <input type="text" placeholder="Search books by title or author" onChange={(ev) => onSearch(ev)} className={styles.searchBar} />
            <div className={styles.dropdown}>
                {!!booksToDisplay.length && booksToDisplay.map(book => (
                    <div className={styles.resultWrapper} key={book.id}>
                        <Link to={"/books/" + book.genre + "/" + book.id} className={styles.result}>
                            <img src={book.img} alt={book.title} className={styles.resultCover}></img>
                            <div className={styles.resultText}>
                                <div className={styles.resultTitle}>{book.title}</div>
                                <div>
                                    <span>by </span>
                                    <span>{book.author}</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
                )}
            </div>
        </div>
    )

}