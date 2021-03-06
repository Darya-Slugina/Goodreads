import styles from './BooksView.module.scss'
import { Link } from "react-router-dom";

export default function BooksTable({ books }) {   

    const onMouseEnterHandler = (e) => {
        e.target.nextSibling.style.display = "block";
    }

    const onMouseLeaveHandler = (e) => {
        e.target.nextSibling.style.display = "none";
    }

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th className={styles.heading}>cover</th>
                    <th className={styles.heading}>title</th>
                    <th className={styles.heading}>author</th>
                </tr>
            </thead>
            <tbody>
                {books.map(book => (
                    <tr className={styles.row} key={book.id}>
                        <td className={styles.bookCoverWrapper}>
                            <Link to={"/books/" + book.genre + "/" + book.id} key={book.id}>
                                <img src={book.img} alt={book.title} onMouseEnter={onMouseEnterHandler}
                                    onMouseLeave={onMouseLeaveHandler}></img>
                                <div className={styles.bookInfoContainer}>
                                    <div className={styles.wrapper}>
                                        <h1 id="bookTitle" className={styles.bookInfoContainerTitle}>{book.title}</h1>
                                        <p className={styles.bookInfoContainerText}>by {book.author}</p>
                                        <p className={styles.bookInfoContainerText}>{book.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </td>
                        <td><Link to={"/books/" + book.genre + "/" + book.id} key={book.id}><p>{book.title}</p></Link></td>
                        <td><Link to={"/books/" + book.genre + "/" + book.id} key={book.id}><p>{book.author}</p></Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}