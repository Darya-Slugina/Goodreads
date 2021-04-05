import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styles from "./SearchBar.module.scss";
import { Link } from "react-router-dom";
import '../common/DropdownMenu.scss'

export default function SearchBar() {
    const books = useSelector((state) => state.books.books);
    
    const [booksToDisplay, setBooksToDisplay] = useState([]);
    const [searchContent, setSearchContent] = useState('');
    const [message, setMessage] = useState('')
    const [isActive, setIsActive] = useState(false);

    const dropdownRef = useRef(null);

    const onSearch = (ev) => {
        let value = ev.target.value.toLowerCase().trim();
        setSearchContent(value);
        setIsActive(true);
    }

    useEffect(() => {
        const pageClickEvent = (e) => {
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setIsActive(!isActive);
            }
        };

        if (searchContent) {
            let filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchContent) || book.author.toLowerCase().includes(searchContent));
            if (filteredBooks.length) {
                setBooksToDisplay(filteredBooks)
                setMessage('')
            } else {
                setMessage('no books match the search')
                setBooksToDisplay([])
            }
        }
        
        if (isActive) {
            window.addEventListener('click', pageClickEvent);
        }

        return () => {
            window.removeEventListener('click', pageClickEvent);
        }

    }, [isActive, searchContent, books]);


    return (
        <div className={styles.searchBarWrapper}>
            <input type="text" maxLength='100' placeholder="Search books by title or author" onChange={onSearch} className={styles.searchBar} />
            <div ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <div className={styles.resultWrapper}>{message}</div>
                {!!booksToDisplay.length && searchContent && booksToDisplay.map(book => (
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