import React, { useEffect } from "react";
import BooksTableView from './BooksTableView'
import BooksCoverView from './BooksCoverView'
import styles from './MyBooks.module.scss'
import { useState, useCallback, useMemo } from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import Tooltip from 'react-bootstrap/Tooltip'

export default function BooksView({ books }) {

    const [isTableView, setTableView] = useState(true);
    const [booksToDisplay, setBooksToDisplay] = useState(books);
    const [sortState, setSortState] = useState('Author');
    const [isAscOrder, setIsAscOrder] = useState(true);


    useEffect(() => {
        if (sortState === 'Title') {
            // if (isAscOrder) {
            //     books.sort((a, b) => a.title.localeCompare(b.title));
            // } else {
            //     books.sort((a, b) => b.title.localeCompare(a.title));
            // }
            books.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortState === 'Author') {
            // if (isAscOrder) {
            //     books.sort((a, b) => a.author.localeCompare(b.author));
            // } else {
            //     books.sort((a, b) => b.author.localeCompare(a.author));
            // }
            books.sort((a, b) => a.author.localeCompare(b.author));
        } else if (sortState === 'Random') {
            books.sort(() => Math.random() - 0.5);
        }

        setBooksToDisplay(books);

    }, [books, booksToDisplay, isAscOrder, sortState])

    const handleSort = (ev) => {
        let value = ev.target.value;
        // console.log('value: ', value)
        setSortState(value)
        // console.log('sortState: ', sortState)
    }

    const handleOrder = (ev) => {
        let value = ev.target.id;
        if (value === 'order_a') {
            setIsAscOrder(true)
        } else {
            setIsAscOrder(false)
        }
    }

    return (
        <React.Fragment>
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
            {!booksToDisplay.length ? <p>No added books yet.</p> : <div className={styles.booksViewWrapper}>
                {isTableView ? <BooksTableView books={booksToDisplay} /> : <BooksCoverView books={booksToDisplay} />}
            </div>}
            <div className={styles.filters}>
                <div className={styles.pagination}>
                    <label for="per_page">per page</label>
                    <select name="per_page" >
                        <option>10</option>
                        <option defaultValue>20</option>
                        <option>30</option>
                    </select>
                </div>
                <div>
                    <label for="sort">sort</label>
                    <select name="sort" onChange={handleSort}>
                        <option>Author</option>
                        <option>Random</option>
                        <option>Title</option>
                    </select>
                </div>
                <div onChange={handleOrder}>
                    <input type="radio" name="order" id='order_a'></input>
                    <label for="order_a">asc.</label>
                    <input type="radio" name="order" id='order_d'></input>
                    <label for="order_d" defaultValue>desc.</label>
                </div>
            </div>
        </React.Fragment>
    )
}


