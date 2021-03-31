import React, { useState } from "react";
import styles from './MyBooks.module.scss'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import BooksTable from './BooksTable'


export default function MyBooks() {

    const [isTableView, setTableView] = useState(true);

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
                        <div className={styles.mainContainer}>
                            {isTableView ? <BooksTable /> : <h2>List view</h2>}

                        </div>
                        <div className={styles.filters}>
                            <div className={styles.pagination}>
                                <label for="per_page">per page</label>
                                <select name="per_page">
                                    <option>10</option>
                                    <option selected>20</option>
                                    <option>30</option>
                                </select>
                            </div>
                            <div>
                                <label for="sort">sort</label>
                                <select name="sort">
                                    <option>Author</option>
                                    <option>Random</option>
                                    <option>Rating</option>
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
        </React.Fragment>
    )
}