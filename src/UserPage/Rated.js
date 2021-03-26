import styles from './CurrentlyReading.module.scss'
import React, { useState } from "react";
import { TiThLarge } from "react-icons/ti";
import { TiThMenu } from "react-icons/ti";
import Book from "../GenresPage/BookImg";
import books from "./../Data/Books/Books"
import SimpleRating from "../BooksPage/Rating";

const myBooks = [...books];
  myBooks.sort(() => Math.random() - 0.5);
  myBooks.length = 12; //Magic number


export default function Rated({isItUser}) {
    console.log(isItUser);

    const [isGridView, setIsGridView] = useState(true);

    const toggleView = (e) => {
        console.log(e.target);
        e.target.classList.add("active");
        setIsGridView(!isGridView);
    };

    return (
        <div className={styles.mainBooksBox}>
            <div className={styles.screenControls}>
                {isGridView ? (
                    <TiThLarge className={styles.icons} onClick={toggleView} />
                ) : (
                    <TiThMenu className={styles.icons} onClick={toggleView} />
                )}
            </div>
            <div>
                {isGridView ? (
                    <table className={styles.table}>
                        <thead>
                            <tr className={styles.header}>
                                <th alt="cover" className={styles.cover}>
                                    <a href="/review/list/4685500-angela-m?order=d&amp;sort=cover&amp;utf8=%E2%9C%93&amp;view=table" className={styles.link}>cover</a>
                                </th>
                                <th alt="title" className={styles.title}>
                                    <a href="/review/list/4685500-angela-m?order=d&amp;sort=title&amp;utf8=%E2%9C%93&amp;view=table" className={styles.link}>title</a>
                                </th>
                                <th alt="author" className={styles.author}>
                                    <a href="/review/list/4685500-angela-m?order=d&amp;sort=author&amp;utf8=%E2%9C%93&amp;view=table" className={styles.link}>author</a>
                                </th>
                                <th alt="avg_rating" className={styles.rating}>
                                    <a href="/review/list/4685500-angela-m?order=d&amp;sort=avg_rating&amp;utf8=%E2%9C%93&amp;view=table" className={styles.link}>avg rating</a>
                                </th>
                                <th alt="review" className={styles.review}>
                                    <a href="/review/list/4685500-angela-m?order=d&amp;sort=review&amp;utf8=%E2%9C%93&amp;view=table" className={styles.link}>review</a>
                                </th>
                                <th alt="review" className={styles.edit}>
                                    <a href="/review/list/4685500-angela-m?order=d&amp;sort=review&amp;utf8=%E2%9C%93&amp;view=table" className={styles.link}>edit</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={styles.body}>
                                <td className={styles.coverInfo}>
                                    <a href="/book/show/8881004-the-coming-and-going-of-strangers">
                                        <img className={styles.bookImg} alt="The Coming and Going of Strangers" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327784031l/8881004._SX50_.jpg" />
                                    </a>
                                </td>
                                <td className={styles.titleInfo}>
                                    <a title="The Coming and Going of Strangers" href="/book/show/8881004-the-coming-and-going-of-strangers" className={styles.link}>
                                        The Coming and Going of Strangers
                                        </a>
                                </td>
                                <td className={styles.authorInfo}>
                                    <div class="value">
                                        <a href="/author/show/295297.Simon_Van_Booy" className={styles.link}>Van Booy, Simon</a>
                                    </div>
                                </td>
                                <td className={styles.ratingInfo}>
                                    <div className={styles.value}>    4.11
                                    </div>
                                </td>
                                <td className={styles.myRatingInfo}>
                                    <div>
                                    {isItUser?  <SimpleRating stars={3.49} active={true} /> : <SimpleRating stars={3.49} /> }
                                    </div>
                                </td>
                                <td className={styles.clearRatingInfo}>
                                    <div className={styles.clearRating} >Clear rating</div>
                                </td>
                            </tr>
                            <tr className={styles.body}>
                                <td className={styles.coverInfo}>
                                    <a href="/book/show/8881004-the-coming-and-going-of-strangers">
                                        <img className={styles.bookImg} alt="The Coming and Going of Strangers" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327784031l/8881004._SX50_.jpg" />
                                    </a>
                                </td>
                                <td className={styles.titleInfo}>
                                    <a title="The Coming and Going of Strangers" href="/book/show/8881004-the-coming-and-going-of-strangers" className={styles.link}>
                                        The Coming and Going of Strangers
                                        </a>
                                </td>
                                <td className={styles.authorInfo}>
                                    <div class="value">
                                        <a href="/author/show/295297.Simon_Van_Booy" className={styles.link}>Van Booy, Simon</a>
                                    </div>
                                </td>
                                <td className={styles.ratingInfo}>
                                    <div className={styles.value}>    4.11
                                    </div>
                                </td>
                                <td className={styles.myRatingInfo}>
                                    <div>
                                    {isItUser?  <SimpleRating stars={4.49} active={true} /> : <SimpleRating stars={4.49} /> }
                                    </div>
                                </td>
                                <td className={styles.clearRatingInfo}>
                                    <div className={styles.clearRating} >Clear rating</div>
                                </td>
                            </tr>
                            <tr className={styles.body}>
                                <td className={styles.coverInfo}>
                                    <a href="/book/show/8881004-the-coming-and-going-of-strangers">
                                        <img className={styles.bookImg} alt="The Coming and Going of Strangers" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327784031l/8881004._SX50_.jpg" />
                                    </a>
                                </td>
                                <td className={styles.titleInfo}>
                                    <a title="The Coming and Going of Strangers" href="/book/show/8881004-the-coming-and-going-of-strangers" className={styles.link}>
                                        The Coming and Going of Strangers
                                        </a>
                                </td>
                                <td className={styles.authorInfo}>
                                    <div class="value">
                                        <a href="/author/show/295297.Simon_Van_Booy" className={styles.link}>Van Booy, Simon</a>
                                    </div>
                                </td>
                                <td className={styles.ratingInfo}>
                                    <div className={styles.value}>    4.11
                                    </div>
                                </td>
                                <td className={styles.myRatingInfo}>
                                    <div>
                                    {isItUser?  <SimpleRating stars={5} active={true} /> : <SimpleRating stars={5} /> }
                                    </div>
                                </td>
                                <td className={styles.clearRatingInfo}>
                                    <div className={styles.clearRating} >Clear rating</div>
                                </td>
                            </tr>
                            <tr className={styles.body}>
                                <td className={styles.coverInfo}>
                                    <a href="/book/show/8881004-the-coming-and-going-of-strangers">
                                        <img className={styles.bookImg} alt="The Coming and Going of Strangers" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327784031l/8881004._SX50_.jpg" />
                                    </a>
                                </td>
                                <td className={styles.titleInfo}>
                                    <a title="The Coming and Going of Strangers" href="/book/show/8881004-the-coming-and-going-of-strangers" className={styles.link}>
                                        The Coming and Going of Strangers
                                        </a>
                                </td>
                                <td className={styles.authorInfo}>
                                    <div class="value">
                                        <a href="/author/show/295297.Simon_Van_Booy" className={styles.link}>Van Booy, Simon</a>
                                    </div>
                                </td>
                                <td className={styles.ratingInfo}>
                                    <div className={styles.value}>    4.11
                                    </div>
                                </td>
                                <td className={styles.myRatingInfo}>
                                    <div>
                                    {isItUser?  <SimpleRating stars={4.20} active={true} /> : <SimpleRating stars={4.20} /> }
                                    </div>
                                </td>
                                <td className={styles.clearRatingInfo}>
                                    <div className={styles.clearRating} >Clear rating</div>
                                </td>
                            </tr>
                            <tr className={styles.body}>
                                <td className={styles.coverInfo}>
                                    <a href="/book/show/8881004-the-coming-and-going-of-strangers">
                                        <img className={styles.bookImg} alt="The Coming and Going of Strangers" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327784031l/8881004._SX50_.jpg" />
                                    </a>
                                </td>
                                <td className={styles.titleInfo}>
                                    <a title="The Coming and Going of Strangers" href="/book/show/8881004-the-coming-and-going-of-strangers" className={styles.link}>
                                        The Coming and Going of Strangers
                                        </a>
                                </td>
                                <td className={styles.authorInfo}>
                                    <div class="value">
                                        <a href="/author/show/295297.Simon_Van_Booy" className={styles.link}>Van Booy, Simon</a>
                                    </div>
                                </td>
                                <td className={styles.ratingInfo}>
                                    <div className={styles.value}>    4.11
                                    </div>
                                </td>
                                <td className={styles.myRatingInfo}>
                                    <div>
                                    {isItUser?  <SimpleRating stars={3.20} active={true} /> : <SimpleRating stars={3.20} /> }
                                    </div>
                                </td>
                                <td className={styles.clearRatingInfo}>
                                    <div className={styles.clearRating} >Clear rating</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                ) : (
                    <div className={styles.bookImgContainer}>
                        {myBooks.map((book) => (
                            <Book key={book.id} {...book} />
                        ))}</div>
                )
                }
            </div>
        </div>
    )
}