import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from './MyBooks.module.scss'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import BooksTableView from './BooksTableView'
import BooksCoverView from './BooksCoverView'
import { Link } from "react-router-dom";

export default function MyBooks() {

    const [isTableView, setTableView] = useState(true);
    const books = useSelector((state) => state.books.books);

    const sortBooks = (ev) => {
        let value = ev.target.value;

        switch (value) {
            case 'Title':
                books.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'Author':
                books.sort((a, b) => a.author.localeCompare(b.author));
                break;
            case 'Random':
                books.sort(() => Math.random() - 0.5);
                break;
            default:
                books.sort((a, b) => a.author.localeCompare(b.author));
                break;
        }
    }

    // get books for user
    return (
        <React.Fragment>
            <div className={styles.mainContainer}>
                <div className={styles.myBooksWrapper}>
                    <div className={styles.main}>
                        <div className={styles.header}>
                            <h1 className={styles.title}>My books</h1>
                            <div className={styles.controls}>
                                <div className={styles.searchField}>
                                    <input className={styles.searchInput} placeholder="Search and add books" />
                                    <div className={styles.searchIcon}></div>
                                </div>
                                <div>
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={<Tooltip id="button-tooltip-2">table view</Tooltip>}
                                    >
                                        {({ ref, ...triggerHandler }) => (
                                            <Button
                                                variant="light"
                                                ref={ref}
                                                {...triggerHandler}
                                                className={styles.listViewIcon}
                                                onClick={() => setTableView(true)}
                                            >
                                            </Button>
                                        )}
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={<Tooltip id="button-tooltip-2">cover view</Tooltip>}
                                    >
                                        {({ ref, ...triggerHandler }) => (
                                            <Button
                                                variant="light"
                                                ref={ref}
                                                {...triggerHandler}
                                                className={styles.gridViewIcon}
                                                onClick={() => setTableView(false)}
                                            >
                                            </Button>
                                        )}
                                    </OverlayTrigger>
                                </div>
                            </div>
                        </div>
                        <div className={styles.contentWrapper}>
                            <div className={styles.sidebar}>
                                <div className={styles.shelvesSection}>
                                    <p className={styles.heading}>Bookshelves</p>
                                    <Link to='' className={styles.subheading}>All ({books.length})</Link>
                                    <Link to='' className={styles.subheading}>Read</Link>
                                    <Link to='' className={styles.subheading}>Currently Reading</Link>
                                    <Link to='' className={styles.subheading}>Want to Read</Link>
                                </div>
                            </div>
                            <div>
                                <div className={styles.booksViewWrapper}>
                                    {isTableView ? <BooksTableView books={books} /> : <BooksCoverView books={books} />}
                                </div>
                                <div className={styles.filters}>
                                    <div className={styles.pagination}>
                                        <label for="per_page">per page</label>
                                        <select name="per_page" >
                                            <option>10</option>
                                            <option selected>20</option>
                                            <option>30</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label for="sort">sort</label>
                                        <select name="sort" onChange={(ev) => sortBooks(ev)}>
                                            <option>Author</option>
                                            <option>Random</option>
                                            <option>Title</option>
                                        </select>
                                    </div>
                                    <div>
                                        <input type="radio" name="order" id='order_a'></input>
                                        <label for="order_a">asc.</label>
                                        <input type="radio" name="order" id='order_d'></input>
                                        <label for="order_d" selected>desc.</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}