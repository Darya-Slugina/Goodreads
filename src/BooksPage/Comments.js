import React from "react";
import styles from './Comments.module.css';
import SimpleRating from "./Rating";

// export default function Comments({ comments }) {

class Comments extends React.Component {
    state = {
        displayComment: false,
        comment: this.props.comments,
    }

    displayComment = () => {
        this.setState({
            displayComment: !this.state.displayComment
        })
    }

    addLike = (e) => {
        console.log(e);
        let currentComment = this.state.comment.filter(el => el.id === e.target.id)
        currentComment.likes += 1;

        this.setState({
            comment: [...this.state.comment, currentComment.likes ]
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.comment.map((comment, id) => (
                    <div className={styles.commentsContainer}>
                        <div className={styles.userImgContainer}>
                            <img key={id} src={comment.userImg} alt={comment.userName} className={styles.userImg} />
                        </div>
                        <div className={styles.commentsInfoContainer}>
                            <div className={styles.metaInfo}>
                                <div>
                                    <span className={styles.userName}> {comment.userName} </span>
                                    <span className={styles.rating}>  rated  it </span>
                                    <SimpleRating stars={comment.rate} />
                                </div>
                                <span className={styles.date}>{comment.date}</span>
                            </div>
                            <div className={styles.commentInfo}>
                                {comment.hiddenReview &&
                                    <React.Fragment>
                                        <span className={styles.description}>{comment.review}</span>
                                        {this.state.displayComment ?
                                            <React.Fragment>
                                                <span className={styles.description}>{comment.hiddenReview}</span>
                                                <span className={styles.more} onClick={this.displayComment}>...less</span>
                                            </React.Fragment>
                                            : <span className={styles.more} onClick={this.displayComment}>...more</span>}
                                    </React.Fragment>
                                }
                                <span className={styles.description}>{comment.review}</span>
                            </div>
                            <div className={styles.footerInfo}>
                                <span className={styles.likeItContainer}>
                                    <span className={styles.likesCount}>{comment.likes}&nbsp; likes</span>
                                    &nbsp;·&nbsp;
                                    <span className={styles.likeBtn} onClick={this.addLike} id={comment.commentId}>Like </span>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </React.Fragment>
        );
    }
}
export default Comments;