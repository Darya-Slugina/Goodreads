import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./SearchBar.module.scss";
import { Link } from "react-router-dom";

export default function SearchBar() {
    const books = useSelector((state) => state.books.books);

    const [booksToDisplay, setBooksToDisplay] = useState([]);
    const [dropdownContent, setDropdownContent] = useState('not-visible');
    const [searchContent, setSearchContent] = useState('');


    useEffect(() => {
        if (searchContent) {
            let filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchContent) || book.author.toLowerCase().includes(searchContent));
            if (filteredBooks.length) {
                setBooksToDisplay(filteredBooks)
                setDropdownContent('visible')
            } else {
                setDropdownContent('no-content')
            }
        } else {
            setDropdownContent('not-visible');
        }

    }, [dropdownContent, searchContent, books])

    const onSearch = (ev) => {
        let value = ev.target.value.toLowerCase().trim();
        setSearchContent(value);
    }

    const hideDropdown = () => {
        setSearchContent('');
    }


    return (
        <div className={styles.searchBarWrapper} onBlur={hideDropdown}>
            <input type="text" maxLength='100' placeholder="Search books by title or author" onChange={onSearch} className={styles.searchBar} />
            <div className={styles.dropdown} >
                {dropdownContent === 'not-visible' && <div />}
                {dropdownContent === 'no-content' && <div className={styles.resultWrapper}>no books to display</div>}
                {dropdownContent === 'visible' && !!booksToDisplay.length && booksToDisplay.map(book => (
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