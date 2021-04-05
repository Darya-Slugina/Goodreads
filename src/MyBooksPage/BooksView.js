import React, { useEffect } from "react";
import BooksTableView from './BooksTableView'
import BooksCoverView from './BooksCoverView'
import styles from './BooksView.module.scss'
import Pagination from 'react-bootstrap/Pagination'
import { useState } from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import Tooltip from 'react-bootstrap/Tooltip'


export default function BooksView({ books }) {

    const [isTableView, setTableView] = useState(true);
    const [booksToDisplay, setBooksToDisplay] = useState(books);
    const [sortState, setSortState] = useState('');
    const [isAscOrder, setIsAscOrder] = useState("order_a");
    const [countState, setCountState] = useState('')
    const [pageCount, setPageCount] = useState(0)


    useEffect(() => {
        setBooksToDisplay(books)
    }, [books])


    const sortBooks = (value) => {
        if (value === 'Title') {
            let sorted = booksToDisplay.sort((a, b) => a.title.localeCompare(b.title));
            setBooksToDisplay(sorted);
        } else if (value === 'Author') {
            const sorted = booksToDisplay.sort((a, b) => a.author.localeCompare(b.author));
            setBooksToDisplay(sorted);
        } else if (value === 'Random') {
            const sorted = booksToDisplay.sort(() => Math.random() - 0.5);
            setBooksToDisplay(sorted)
        }
    }

    const handleSort = (ev) => {
        let value = ev.target.value;
        setSortState(value);
        sortBooks(value);
    }

    const handleOrder = (ev) => {
        let value = ev.target.value;
        if (sortState !== 'Random') {
            if (value === 'order_a') {
                setIsAscOrder("order_a");
                let totalSorted = booksToDisplay.sort((a, b) => a[sortState.toLowerCase()].localeCompare(b[sortState.toLowerCase()]));
                setBooksToDisplay(totalSorted)

            } else {
                setIsAscOrder("order_d");
                let totalSorted = books.sort((a, b) => b[sortState.toLowerCase()].localeCompare(a[sortState.toLowerCase()]));
                setBooksToDisplay(totalSorted)
            }
        }

    }

    const handleCount = (ev) => {
        let value = ev.target.value;
        setCountState(value)

        // let numberOfPages = Math.ceil(booksToDisplay.length / Number(countState))
        // console.log("number of pages: " , numberOfPages)
        // setPageCount()

    }

    const showSearchResults = (ev) => {
        let value = ev.target.value;
        let filteredBooks = books.filter(book => book.title.toLowerCase().includes(value) || book.author.toLowerCase().includes(value));
        console.log(filteredBooks)
        setBooksToDisplay(filteredBooks)
    }


    return (
        <React.Fragment>
            <div className={styles.controls}>
                <div className={styles.searchField}>
                    <input className={styles.searchInput} placeholder="Search your books" onChange={showSearchResults} />
                    <div className={styles.searchIcon}></div>
                </div>
                <div className={styles.viewToggleWrapper}>
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
            <div className={styles.paginationControls}>
                {!!countState && <Pagination size="sm">
                    <Pagination.Item key={countState}>
                        {countState}
                    </Pagination.Item>
                </Pagination>}
            </div>
            {!booksToDisplay.length ? <p>No added books yet.</p> : <div className={styles.booksViewWrapper}>
                {isTableView ? <BooksTableView books={booksToDisplay} /> : <BooksCoverView books={booksToDisplay} />}
            </div>}
            <div className={styles.filters}>
                <div className={styles.pagination}>
                    <label htmlFor="per_page">per page</label>
                    <select name="per_page" onChange={handleCount}>
                        <option>choose</option>
                        <option>3</option>
                        <option>2</option>
                        <option>1</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="sort">sort</label>
                    <select name="sort" value={sortState} onChange={handleSort}>
                        <option>choose</option>
                        <option>Author</option>
                        <option>Random</option>
                        <option>Title</option>
                    </select>
                </div>
                <div>
                    <input type="radio" name="order" id='order_a' value='order_a' onChange={handleOrder} checked={isAscOrder === 'order_a' ? true : false}></input>
                    <label htmlFor="order_a">asc.</label>
                    <input type="radio" name="order" id='order_d' value='order_d' onChange={handleOrder} checked={isAscOrder === 'order_d' ? true : false}></input>
                    <label htmlFor="order_d" defaultValue>desc.</label>
                </div>
            </div>
        </React.Fragment>
    )
}


