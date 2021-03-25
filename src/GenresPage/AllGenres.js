import styles from './AllGenres.module.scss';
import genresList from "./../Data/Books/GenresList"
import { Link } from "react-router-dom";
import books from "./../Data/Books/Books"
import BooksList from "../BooksPage/BookList";
import Button from "./../common/Button";
import React, { useState } from 'react';

export default function AllGenres() {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = (ev) => {
        setInputValue(ev.target.value);
    };

    const mygenres = [...genresList]
    mygenres.sort(() => Math.random() - 0.5);
    mygenres.length = 3; //Magic number
    const genreList = mygenres.map(el => el.genre);

    const booksByGenre = books.filter(el => el.genre.toLowerCase() === "art");
    const shuffled = [...booksByGenre];
    shuffled.sort(() => Math.random() - 0.5);
    shuffled.length = 5; //Magic number

    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContent}>
                <h1 className={styles.header}>Genres</h1>
                <div className={styles.genreWrapper}>
                    <div className={styles.leftContainer}>
                        <form className={styles.genreSearchForm} >
                            <input type="text" placeholder="Find a genre by name" className={styles.searchInput} onInput={onInputChange} />
                            <Link to={"/genres/" + inputValue.toLowerCase()}><Button value={"Find Genre"} /></Link>
                        </form>
                        <div className={styles.coverBox}>
                            {genreList.map((genre) => (
                                <React.Fragment>
                                    <div className={styles.h2Container}>
                                        <h2><Link to={"/genres/" + genre.toLowerCase()} className={styles.h2Title}>{genre}</Link></h2>
                                    </div>
                                    <div className={styles.boxBody}>
                                        <BooksList books={shuffled} />
                                        <div className={styles.moreLink}>
                                            <Link to={"/genres/" + genre.toLowerCase()} className={styles.actionLink}>More {genre} ... </Link>
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    <div className={styles.rightContainer}>
                        <div className={styles.boxContainer}>
                            <div className={styles.boxContainerTitle}><h2 className={styles.h2Title}>Browse</h2>
                            </div>
                            <div className={styles.boxContainerBody}>
                                {genresList.sort((a, b) => a.genre.localeCompare(b.genre)).map(el => (
                                    <Link to={"/genres/" + el.genre.toLowerCase()} className={styles.genreName}>{el.genre}</Link>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}