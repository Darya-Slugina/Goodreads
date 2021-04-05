import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import styles from './MyBooks.module.scss'
import { Nav } from "react-bootstrap";
import BooksView from './BooksView'

export default function MyBooks() {

    const books = useSelector((state) => state.books.books);
    const user = useSelector((state) => state.user.user);
    const [selectedTab, setSelectedTab] = useState("All");


    const currentlyReading = useMemo(() => {
        if (user && user.currentlyReading) {
            return books.filter(book => user.currentlyReading.includes(book.id));
        }
        return []
    }, [books, user])

    const readBooks = useMemo(() => {
        if (user && user.read) {
            return books.filter(book => user.read.includes(book.id));
        }
        return []
    }, [books, user])

    const wantToRead = useMemo(() => {
        if (user && user.wantToRead) {
            return books.filter(book => user.wantToRead.includes(book.id));
        }
        return []
    }, [books, user])

    const userAllBooks = useMemo(() => {
        if (user) {
            return [...currentlyReading, ...wantToRead, ...readBooks];
        }
    }, [user, currentlyReading, wantToRead, readBooks])


    const onShelveChange = (eventKey) => {
        setSelectedTab(eventKey);
    };

    

    return (
        <React.Fragment>
            <div className={styles.mainContainer}>
                <div className={styles.myBooksWrapper}>
                    <div className={styles.main}>
                        <div className={styles.header}>
                            <h1 className={styles.title}>My books</h1>
                        </div>
                        <div className={styles.contentWrapper}>
                            <div className={styles.sidebar}>
                                <div className={styles.shelvesSection}>
                                    <p className={styles.heading}>Bookshelves</p>
                                    <div>
                                        <Nav defaultActiveKey={selectedTab} onSelect={onShelveChange} className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="All" className={styles.subheading}>All ({userAllBooks.length})</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="Read" className={styles.subheading}>Read ({readBooks.length})</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="Currently Reading" className={styles.subheading}>Currently Reading ({currentlyReading.length})</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="Want to Read" className={styles.subheading}>Want to Read ({wantToRead.length})</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.booksViewWrapper}>
                                {selectedTab === "Currently Reading" && <BooksView books={currentlyReading} />}
                                {selectedTab === "Want to Read" && <BooksView books={wantToRead} />}
                                {selectedTab === "Read" && <BooksView books={readBooks} />}
                                {selectedTab === "All" && <BooksView books={userAllBooks} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}