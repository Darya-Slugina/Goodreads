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
    const [paginationItems, setPaginationItems] = useState([])
    const [perPage, setPerPage] = useState()


    useEffect(() => {
        setBooksToDisplay(books)
    }, [books])


    const sortBooks = (state) => {
        if (state === 'Title') {
            let sorted = booksToDisplay.sort((a, b) => a.title.localeCompare(b.title));
            setBooksToDisplay(sorted);
            setIsAscOrder("order_a");
        } else if (state === 'Author') {
            const sorted = booksToDisplay.sort((a, b) => a.author.localeCompare(b.author));
            setBooksToDisplay(sorted);
            setIsAscOrder("order_a");
        } else if (state === 'Random') {
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
        if (sortState && sortState !== 'Random') {
            if (value === 'order_a') {
                setIsAscOrder("order_a");
                let totalSorted = booksToDisplay.sort((a, b) => a[sortState.toLowerCase()].localeCompare(b[sortState.toLowerCase()]));
                setBooksToDisplay(totalSorted)

            } else {
                setIsAscOrder("order_d");
                let totalSorted = booksToDisplay.sort((a, b) => b[sortState.toLowerCase()].localeCompare(a[sortState.toLowerCase()]));
                setBooksToDisplay(totalSorted)
            }
        }

    }

    const handleCount = (ev) => {
        let perPageValue = Number(ev.target.value);
        setPerPage(perPageValue)
        setBooksToDisplay(books)

        let numberOfPages = Math.ceil(books.length / perPageValue)
        let newPageCount = []
        for (let i = 1; i <= numberOfPages; i++) {
            newPageCount.push(i)
        }

        setPaginationItems(newPageCount)
        showSelectedPage(0, perPageValue)
    }


    const handleEvent = (ev) => {
        let selectedPageValue = Number(ev.target.innerHTML) - 1;
        showSelectedPage(selectedPageValue, perPage)
    }

    const showSelectedPage = (selectedPageValue, perPageValue) => {
        let copiedBooks = [...books]
        let booksFromPagination = copiedBooks.slice(selectedPageValue * perPageValue, selectedPageValue * perPageValue + perPageValue)

        setBooksToDisplay(booksFromPagination)
    }

    const showSearchResults = (ev) => {
        let value = ev.target.value;
        let filteredBooks = books.filter(book => book.title.toLowerCase().includes(value) || book.author.toLowerCase().includes(value));
        setBooksToDisplay(filteredBooks)
    }


    return (
        <React.Fragment>
            <div className={styles.controls}>
                <div className={styles.searchField}>
                    <input className={styles.searchInput} placeholder="Search all of your books" onChange={showSearchResults} />
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
                    <div className={styles.paginationControls}>
                    <Pagination size="sm" className={styles.paginationWrapper}>
                        {!!paginationItems.length && paginationItems.map((el) => (
                            <Button variant='light' key={el} onClick={handleEvent} className={styles.pagItem} >
                                {el}
                            </Button>
                        )
                        )}
                    </Pagination>
                </div>
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
                    <label htmlFor="order_d">desc.</label>
                </div>
            </div>
        </React.Fragment>
    )
}


