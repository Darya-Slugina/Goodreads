import React, { useMemo } from "react";
import styles from './Books.module.scss';
import { Link } from "react-router-dom";


export default function BooksList({ isShuffled, genre, books, length }) {

  const { shuffled } = useMemo(() => {
    const booksByGenre = books.filter(el => el.genre.toLowerCase() === genre);
    const shuffled = [...booksByGenre];
    shuffled.sort(() => Math.random() - 0.5);
    shuffled.length = length;

    return { shuffled }
  }, [books, genre, length])

  return (
    <React.Fragment>
      { isShuffled && (shuffled.map((book) => (
        <Link to={"/books/" + book.genre + "/" + book.id} key={book.id}>
          <img key={book.id} src={book.img} alt={book.title} className={styles.bookImg} />
        </Link>
      )))}
      { !isShuffled && (books.map((book, index) => (
        <Link to={"/books/" + book.genre + "/" + book.id} key={index}>
          <img key={index} src={book.img} alt={book.title} className={styles.bookImg} />
        </Link>
      )))}
    </React.Fragment>

  );
}