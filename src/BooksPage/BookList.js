import React, { useState, useEffect, useMemo } from "react";
import styles from './Books.module.scss';
import { Link } from "react-router-dom";
import { database } from "../firebase";


export default function BooksList({ isShuffled, genre }) {
  console.log(genre);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    database.collection("books").get()
      .then((querySnapshot) => {
        let dbBooks = [];
        querySnapshot.forEach((doc) => {
          dbBooks.push(doc.data());
        });
        setBooks(dbBooks);
      });
  }, []);
  console.log(books);

  const { shuffled } = useMemo(() => {
    const booksByGenre = books.filter(el => el.genre.toLowerCase() === genre.toLowerCase());
    const shuffled = [...booksByGenre];
    shuffled.sort(() => Math.random() - 0.5);
    shuffled.length = 5; //Magic number

    return { shuffled }
  }, [books, genre])

  return (
    <React.Fragment>
      { isShuffled && (shuffled.map((book) => (
        <Link to={"/books/" + book.genre + "/" + book.id}>
          <img key={book.id} src={book.img} alt={book.title} className={styles.bookImg} />
        </Link>
      )))}
      { !isShuffled && (books.map((book, index) => (
        <Link to={"/books/" + book.genre + "/" + book.id}>
          <img key={index} src={book.img} alt={book.title} className={styles.bookImg} />
        </Link>
      )))}
    </React.Fragment>

  );
}