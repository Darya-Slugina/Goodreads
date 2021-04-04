import styles from "./BookImg.module.scss"

export default function BlockInfo({book}) {

  return (
    <div className={styles.bookInfoContainer}>
      <div>
      <h1 id="bookTitle" className={styles.bookTitle}>{book.title}</h1>
      </div>
    </div>
  )
}