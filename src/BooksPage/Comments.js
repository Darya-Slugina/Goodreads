import React, { useState } from "react";
import styles from './Comments.module.css';
import SimpleRating from "./Rating";
import { Link } from "react-router-dom";

export default function Comments({ commentId, userName, userImg, date, rate, likes, review, hiddenReview, id }) {

    const [displayComment, setDisplayComment] = useState(false);

    const displayOnScreen = () => {
        setDisplayComment(!displayComment)
    }

    //     addLike = (e) => {
    //         console.log(e);
    //         let currentComment = this.state.comment.filter(el => el.id === e.target.id)
    //         currentComment.likes += 1;

    //         this.setState({
    //             comment: [...this.state.comment, currentComment.likes ]
    //         })
    //     }


    return (
        <React.Fragment>
            <div className={styles.commentsContainer}>
                <div className={styles.userImgContainer}>
                    <Link to={"/user/" + id}><img src={userImg} alt={userName} className={styles.userImg} /></Link>
                </div>
                <div className={styles.commentsInfoContainer}>
                    <div className={styles.metaInfo}>
                        <div>
                            <Link to={"/user/" + id}><span className={styles.userName}> {userName} </span></Link>
                            <span className={styles.rating}>  rated  it </span>
                            <SimpleRating stars={rate} />
                        </div>
                        <span className={styles.date}>{date}</span>
                    </div>
                    <div className={styles.commentInfo}>
                        {hiddenReview &&
                            <React.Fragment>
                                <span className={styles.description}>{review}</span>
                                {displayComment ?
                                    <React.Fragment>
                                        <span className={styles.description}>{hiddenReview}</span>
                                        <span className={styles.more} onClick={displayOnScreen}>...less</span>
                                    </React.Fragment>
                                    : <span className={styles.more} onClick={displayOnScreen}>...more</span>}
                            </React.Fragment>
                        }
                        <span className={styles.description}>{review}</span>
                    </div>
                    <div className={styles.footerInfo}>
                        <span className={styles.likeItContainer}>
                            <span className={styles.likesCount}>{likes}&nbsp; likes</span>
                                    &nbsp;·&nbsp;
                                    <span className={styles.likeBtn} onClick={() => { }} id={commentId}>Like </span>
                        </span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}