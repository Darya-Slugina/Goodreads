import React from "react";
import styles from './Books.module.css';
import {  Link } from "react-router-dom";


export default function BooksList({ books }) {
  return (
    <React.Fragment>
      {books.map((book, index) => (
        <Link to={"/books/" + book.genre + "/" + book.id}>
          <img key={index} src={book.img} alt={book.title} className={styles.bookImg} />
        </Link>
      ))}
    </React.Fragment>
  );
}