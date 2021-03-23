import styles from './Genres.module.css';
import genresList from "./../Data/Books/GenresList"
import { useParams } from "react-router-dom";
import Book from "./BookImg";
import books from "./../Data/Books/Books"

export default function Genres() {

  const { currentGenre } = useParams();

  let thisGenre = genresList.filter(el => el.genre.toLowerCase() === currentGenre);
  const currentBooks = books.filter(el => el.genre.toLowerCase() === currentGenre);

  const mostWanted = [...books];
  console.log(mostWanted);
  mostWanted.sort(() => Math.random() - 0.5);
  mostWanted.length = 12; //Magic number

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContent}>
        <div className={styles.genreHeader}>
          <h1 className={styles.left}> {thisGenre[0].genre} </h1>
          <div className={styles.reviewText}>
            <span>{thisGenre[0].description}</span>
          </div>
          <br />
          <div className={styles.coverBigBox}>
            <div className={styles.h2Container}>
              <h2 className={styles.h2Genre}>New Releases Tagged "{currentGenre}"</h2>
            </div>
            <div className={styles.bigBoxBody}>
              {currentBooks.map((book) => (
                <Book img={book.img} key={book.id} id={book.id} genre={currentGenre} />
              ))}
            </div>
          </div>
          <div className={styles.coverBigBox}>
            <div className={styles.h2Container}>
              <h2 className={styles.h2Genre}>Most Read This Week</h2>
            </div>
            <div className={styles.bigBoxBody}>
              {mostWanted.map((book) => (
                <Book img={book.img} key={book.id} id={book.id} genre={book.genre} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
