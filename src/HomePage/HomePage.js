import styles from "./HomePage.module.scss"
import React from "react"
import { Link } from "react-router-dom";
import HomePageHeader from "../Headers/HomePageHeader"

export default function HomePage({ books, genresList }) {
    return (
        <React.Fragment>
            <HomePageHeader />
            <main className={styles.main}>
                <div className={styles.mainContainer}>
                    <div className={styles.textBoxWrapper}>
                        <div className={styles.textBox} style={{ marginRight: "40px" }}>
                            <h2>Deciding what to read next?</h2>
                            <p>You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.</p>
                        </div>
                        <div className={styles.textBox}>
                            <h2>What are your friends reading?</h2>
                            <p>Chances are your friends are discussing their favorite (and least favorite) books on Goodreads.</p>
                        </div>
                    </div>
                    <div className={styles.discoveryBox}></div>
                    <div id="browseBox">
                        <h2>Search and browse books</h2>
                        <input type="text" placeholder="Title / Author" />
                        <div className= {styles.genreLinksWrapper}>
                            {genresList.sort((a, b) => a.genre.localeCompare(b.genre)).map(el => (
                                <Link to={"/genres/" + el.genre.toLowerCase()} key={el.id} className={styles.genreLink} >{el.genre}</Link>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )

}