import styles from "./BookImg.module.scss"
import { Link } from "react-router-dom";
import { React, useEffect } from "react";
import BlockInfo from "./BlockInfo";
import books from "../Data/Books/Books";

export default function Book({ img, id, genre }) {

  // const createBlock = () => { <BlockInfo /> };

  // useEffect(() => {
  //   books = React.Children.toArray(this.props.children).filter((item) => item.props.className === 'bookImg');
  //   books.forEach(el => el.addEventListener("onMouseOver", createBlock))
  // }, [])


    return (
      <div className={styles.bookContainer}>
        <Link to={"/books/" + genre + "/" + id}>
          <img src={img} alt={id} key={id} className={styles.bookImg} />
        </Link>
      </div>
    )
  }