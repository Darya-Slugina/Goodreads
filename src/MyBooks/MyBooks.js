import React from "react";
import styles from './MyBooks.module.css'

export default function MyBooks() {
    return (
        <React.Fragment>
            <div className={styles.myBooksWrapper}>
                <div className={styles.main}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>My books</h1>
                        <div className={styles.controls}>
                            <div className={styles.searchField}>
                                <input className={styles.searchInput} placeholder="Search and add books"/>
                                <div className={styles.searchIcon}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}