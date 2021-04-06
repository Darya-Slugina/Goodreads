import styles from './Error.module.scss';
import { Link } from "react-router-dom";


export default function Error() {
    return (
        <div className={styles.errorContentContainer}>
            <div className={styles.mainErrorContent}>
                    <div className={styles.leftContainer}>
                        <h4 className={styles.errorHeader}>We’re sorry, you seem to have stumbled on a bad link.</h4>
                        <div className={styles.rightContainer}>
                            <img src="https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/frost_book-63a7b8d45d1a90d855083d4dea811026.png?alt=media&token=e049a014-af81-49a7-957f-c64efc69688d" alt="The Road Not Taken and Other Poems cover" />
                            <span className={styles.author}>
                                <img src="https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/frost_author-5ca4ea23d1c35dd6db39c432abcff0cf.png?alt=media&token=e503fe4c-fd61-4b9a-add9-7abe6bdfb1b8" alt="Robert Frost" className={styles.authorImg} />
                            </span>
                        </div>
                        <p className={styles.errorText}>
                            Two links diverged from a yellow page,
                            <br />And sorry I could not travel both
                            <br />And be one traveler, long I stood
                                <br />And looked down one as far as I could
                                <br />To where it broke in the understroke;
                                <br /><br />
                                Then took the other, as just as fair
                                <br />And having perhaps the better claim,
                                <br />Because it was grassy and wanted wear;
                                <br />Though as for that the passing there
                                <br />May wear them really about the same,
                                <br /><br />
                                And both that page-load equally lay
                                <br />In bits no click had colored black.
                                <br />
                            <br />
                             — adapted from
                             <i>The Road Not Taken</i> by Robert Frost
                        </p>
                        <p className={styles.errorBtn}>
                            <Link className={styles.button} to="/">Back to the Goodreads homepage</Link>
                        </p>
                </div>
            </div>
        </div>
    )
}