import React from "react";
import styles from './Books.module.css';

export default function BooksList({ books }) {
  return (
    <React.Fragment>
      {books.map((book, index) => (
          <img key={index} src={book} alt={book} className={styles.bookImg} />
      ))}
    </React.Fragment>
  );
}