import styles from "./BookImg.module.css"
import {  Link } from "react-router-dom";

export default function Book({img, id, genre} ) {

    return (
        <div className={styles.bookContainer}>
        <Link to={"/books/"+ genre +"/" + id}>
        <img src={img} alt={id} className={styles.bookImg} />
        </Link>
      </div>
    )
  }