import styles from './CurrentlyReading.module.scss'
import React, { useState } from "react";
import { TiThLarge } from "react-icons/ti";
import { TiThMenu } from "react-icons/ti";
import Book from "../GenresPage/BookImg";
import books from "./../Data/Books/Books"

const myBooks = [...books];
  myBooks.sort(() => Math.random() - 0.5);
  myBooks.length = 12; //Magic number


export default function CurrentlyReading() {

    const [displayComment, setDisplayComment] = useState(false);
    const [isGridView, setIsGridView] = useState(true);

    const toggleView = (e) => {
        console.log(e.target);
        e.target.classList.add("active");
        setIsGridView(!isGridView);
    };

    const displayOnScreen = () => {
        setDisplayComment(!displayComment);
    }

    return (
        <div className={styles.mainBooksBox}>
            <div className={styles.screenControls}>
                {isGridView ? (
                    <TiThLarge className={styles.icons} onClick={toggleView} />
                ) : (
                    <TiThMenu className={styles.icons} onClick={toggleView} />
                )}
            </div>
            <div>
                {isGridView ? (
                    <table className={styles.table}>
                        <thead>
                            <tr className={styles.header}>
                                <th alt="cover" className={styles.cover}>
                                    <a href="/review/list/4685500-angela-m?order=d&amp;sort=cover&amp;utf8=%E2%9C%93&amp;view=table" className={styles.link}>cover</a>
                                </th>
                                <th alt="title" className={styles.title}>
                                    <a href="/review/list/4685500-angela-m?order=d&amp;sort=title&amp;utf8=%E2%9C%93&amp;view=table" className={styles.link}>title</a>
                                </th>
                                <th alt="author" className={styles.author}>
                                    <a href="/review/list/4685500-angela-m?order=d&amp;sort=author&amp;utf8=%E2%9C%93&amp;view=table" className={styles.link}>author</a>
                                </th>
                                <th alt="avg_rating" className={styles.rating}>
                                    <a href="/review/list/4685500-angela-m?order=d&amp;sort=avg_rating&amp;utf8=%E2%9C%93&amp;view=table" className={styles.link}>avg rating</a>
                                </th>
                                <th alt="review" className={styles.review}>
                                    <a href="/review/list/4685500-angela-m?order=d&amp;sort=review&amp;utf8=%E2%9C%93&amp;view=table" className={styles.link}>review</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={styles.body}>
                                <td className={styles.coverInfo}>
                                    <a href="/book/show/8881004-the-coming-and-going-of-strangers">
                                        <img className={styles.bookImg} alt="The Coming and Going of Strangers" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327784031l/8881004._SX50_.jpg" />
                                    </a>
                                </td>
                                <td className={styles.titleInfo}>
                                    <a title="The Coming and Going of Strangers" href="/book/show/8881004-the-coming-and-going-of-strangers" className={styles.link}>
                                        The Coming and Going of Strangers
                                        </a>
                                </td>
                                <td className={styles.authorInfo}>
                                    <div class="value">
                                        <a href="/author/show/295297.Simon_Van_Booy" className={styles.link}>Van Booy, Simon</a>
                                    </div>
                                </td>
                                <td className={styles.ratingInfo}>
                                    <div className={styles.value}>    4.11
                                    </div>
                                </td>
                                <td className={styles.reviewInfo}>
                                    <div>
                                        <React.Fragment>
                                            <span className={styles.description}>It's a beautiful and sad but a strangely told story, and the narrative is different
                                            from anything I've read . The back of the cover description tells</span>
                                            {displayComment ?
                                                <React.Fragment>
                                                    <span className={styles.descriptionHidden}>It's a beautiful and sad but a strangely told story, and the narrative
                                                    is different from anything I've read . The back of the cover description tells a poignant detail about Lincoln
                                                    which Saunders in the Q&amp;A tells us was the thought that formed for him the heart of this story. At the
                                                    time of his 11 year old son Willie's death by typhoid fever, it was reported that Lincoln went to the crypt
                                                    at night to hold his son's body. The grief that one can almost feel in that image is the essence of this
                                                    book and has been fully and imaginatively depicted. The grief - this book is so filled with Lincoln's grief,
                                                    it will break your heart. While this is told in such a unique way, it took me only a few pages to be pulled
                                                in. But the grief became overwhelming at times and I had to put it down for a break once in a while. <br /><br />
                                                The first thing I did before I decided to read this book was look up the definition of bardo. "
                                                (in Tibetan Buddhism) a state of existence between death and rebirth, varying in length according to a person's
                                                conduct in life and manner of, or age at, death. " (English Oxford Dictionary) I'm glad I did because most of this
                                                mixed narrative is comprised of the voices of the dead including Willie who are in the bardo. These conversations
                                                are interspersed with excerpts from historical texts mainly describing how they saw Lincoln suffering this
                                                tremendous loss, and as mentioned in the Q &amp; A with Saunders, some of the excerpts are imagined. It's
                                                    impossible to tell which are real and which are created as I read them. I decided not to look them up but to
                                                    accept Saunders' creative license . This is a novel, albeit not a straightforward telling. <br /><br /> I thought it
                                                    was a fascinating way to tell the story not just of the death of Willie but it is in many ways a commentary
                                                    on the man who was president during a trying time in our history, a commentary on the time, but also on
                                                        life and death. I recommend this to those who are open to something very different and very moving.<br /><br />
                                                        I received an ARC of this book from Random House</span>
                                                    <span className={styles.link} onClick={displayOnScreen}>...less</span>
                                                </React.Fragment>
                                                : <span className={styles.link} onClick={displayOnScreen}>...more</span>}
                                        </React.Fragment>
                                    </div>
                                </td>
                            </tr>
                            <tr className={styles.body}>
                                <td className={styles.coverInfo}>
                                    <a href="/book/show/8881004-the-coming-and-going-of-strangers">
                                        <img className={styles.bookImg} alt="The Coming and Going of Strangers" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327784031l/8881004._SX50_.jpg" />
                                    </a>
                                </td>
                                <td className={styles.titleInfo}>
                                    <a title="The Coming and Going of Strangers" href="/book/show/8881004-the-coming-and-going-of-strangers" className={styles.link}>
                                        The Coming and Going of Strangers
                                        </a>
                                </td>
                                <td className={styles.authorInfo}>
                                    <div class="value">
                                        <a href="/author/show/295297.Simon_Van_Booy" className={styles.link}>Van Booy, Simon</a>
                                    </div>
                                </td>
                                <td className={styles.ratingInfo}>
                                    <div className={styles.value}>    4.11
                                    </div>
                                </td>
                                <td className={styles.reviewInfo}>
                                    <div>
                                        <React.Fragment>
                                            <span className={styles.description}>It's a beautiful and sad but a strangely told story, and the narrative is different
                                            from anything I've read . The back of the cover description tells</span>
                                            {displayComment ?
                                                <React.Fragment>
                                                    <span className={styles.descriptionHidden}>It's a beautiful and sad but a strangely told story, and the narrative
                                                    is different from anything I've read . The back of the cover description tells a poignant detail about Lincoln
                                                    which Saunders in the Q&amp;A tells us was the thought that formed for him the heart of this story. At the
                                                    time of his 11 year old son Willie's death by typhoid fever, it was reported that Lincoln went to the crypt
                                                    at night to hold his son's body. The grief that one can almost feel in that image is the essence of this
                                                    book and has been fully and imaginatively depicted. The grief - this book is so filled with Lincoln's grief,
                                                    it will break your heart. While this is told in such a unique way, it took me only a few pages to be pulled
                                                in. But the grief became overwhelming at times and I had to put it down for a break once in a while. <br /><br />
                                                The first thing I did before I decided to read this book was look up the definition of bardo. "
                                                (in Tibetan Buddhism) a state of existence between death and rebirth, varying in length according to a person's
                                                conduct in life and manner of, or age at, death. " (English Oxford Dictionary) I'm glad I did because most of this
                                                mixed narrative is comprised of the voices of the dead including Willie who are in the bardo. These conversations
                                                are interspersed with excerpts from historical texts mainly describing how they saw Lincoln suffering this
                                                tremendous loss, and as mentioned in the Q &amp; A with Saunders, some of the excerpts are imagined. It's
                                                    impossible to tell which are real and which are created as I read them. I decided not to look them up but to
                                                    accept Saunders' creative license . This is a novel, albeit not a straightforward telling. <br /><br /> I thought it
                                                    was a fascinating way to tell the story not just of the death of Willie but it is in many ways a commentary
                                                    on the man who was president during a trying time in our history, a commentary on the time, but also on
                                                        life and death. I recommend this to those who are open to something very different and very moving.<br /><br />
                                                        I received an ARC of this book from Random House</span>
                                                    <span className={styles.link} onClick={displayOnScreen}>...less</span>
                                                </React.Fragment>
                                                : <span className={styles.link} onClick={displayOnScreen}>...more</span>}
                                        </React.Fragment>
                                    </div>
                                </td>
                            </tr>
                            <tr className={styles.body}>
                                <td className={styles.coverInfo}>
                                    <a href="/book/show/8881004-the-coming-and-going-of-strangers">
                                        <img className={styles.bookImg} alt="The Coming and Going of Strangers" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327784031l/8881004._SX50_.jpg" />
                                    </a>
                                </td>
                                <td className={styles.titleInfo}>
                                    <a title="The Coming and Going of Strangers" href="/book/show/8881004-the-coming-and-going-of-strangers" className={styles.link}>
                                        The Coming and Going of Strangers
                                        </a>
                                </td>
                                <td className={styles.authorInfo}>
                                    <div class="value">
                                        <a href="/author/show/295297.Simon_Van_Booy" className={styles.link}>Van Booy, Simon</a>
                                    </div>
                                </td>
                                <td className={styles.ratingInfo}>
                                    <div className={styles.value}>    4.11
                                    </div>
                                </td>
                                <td className={styles.reviewInfo}>
                                    <div>
                                        <React.Fragment>
                                            <span className={styles.description}>It's a beautiful and sad but a strangely told story, and the narrative is different
                                            from anything I've read . The back of the cover description tells</span>
                                            {displayComment ?
                                                <React.Fragment>
                                                    <span className={styles.descriptionHidden}>It's a beautiful and sad but a strangely told story, and the narrative
                                                    is different from anything I've read . The back of the cover description tells a poignant detail about Lincoln
                                                    which Saunders in the Q&amp;A tells us was the thought that formed for him the heart of this story. At the
                                                    time of his 11 year old son Willie's death by typhoid fever, it was reported that Lincoln went to the crypt
                                                    at night to hold his son's body. The grief that one can almost feel in that image is the essence of this
                                                    book and has been fully and imaginatively depicted. The grief - this book is so filled with Lincoln's grief,
                                                    it will break your heart. While this is told in such a unique way, it took me only a few pages to be pulled
                                                in. But the grief became overwhelming at times and I had to put it down for a break once in a while. <br /><br />
                                                The first thing I did before I decided to read this book was look up the definition of bardo. "
                                                (in Tibetan Buddhism) a state of existence between death and rebirth, varying in length according to a person's
                                                conduct in life and manner of, or age at, death. " (English Oxford Dictionary) I'm glad I did because most of this
                                                mixed narrative is comprised of the voices of the dead including Willie who are in the bardo. These conversations
                                                are interspersed with excerpts from historical texts mainly describing how they saw Lincoln suffering this
                                                tremendous loss, and as mentioned in the Q &amp; A with Saunders, some of the excerpts are imagined. It's
                                                    impossible to tell which are real and which are created as I read them. I decided not to look them up but to
                                                    accept Saunders' creative license . This is a novel, albeit not a straightforward telling. <br /><br /> I thought it
                                                    was a fascinating way to tell the story not just of the death of Willie but it is in many ways a commentary
                                                    on the man who was president during a trying time in our history, a commentary on the time, but also on
                                                        life and death. I recommend this to those who are open to something very different and very moving.<br /><br />
                                                        I received an ARC of this book from Random House</span>
                                                    <span className={styles.link} onClick={displayOnScreen}>...less</span>
                                                </React.Fragment>
                                                : <span className={styles.link} onClick={displayOnScreen}>...more</span>}
                                        </React.Fragment>
                                    </div>
                                </td>
                            </tr>
                            <tr className={styles.body}>
                                <td className={styles.coverInfo}>
                                    <a href="/book/show/8881004-the-coming-and-going-of-strangers">
                                        <img className={styles.bookImg} alt="The Coming and Going of Strangers" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327784031l/8881004._SX50_.jpg" />
                                    </a>
                                </td>
                                <td className={styles.titleInfo}>
                                    <a title="The Coming and Going of Strangers" href="/book/show/8881004-the-coming-and-going-of-strangers" className={styles.link}>
                                        The Coming and Going of Strangers
                                        </a>
                                </td>
                                <td className={styles.authorInfo}>
                                    <div class="value">
                                        <a href="/author/show/295297.Simon_Van_Booy" className={styles.link}>Van Booy, Simon</a>
                                    </div>
                                </td>
                                <td className={styles.ratingInfo}>
                                    <div className={styles.value}>    4.11
                                    </div>
                                </td>
                                <td className={styles.reviewInfo}>
                                    <div>
                                        <React.Fragment>
                                            <span className={styles.description}>It's a beautiful and sad but a strangely told story, and the narrative is different
                                            from anything I've read . The back of the cover description tells</span>
                                            {displayComment ?
                                                <React.Fragment>
                                                    <span className={styles.descriptionHidden}>It's a beautiful and sad but a strangely told story, and the narrative
                                                    is different from anything I've read . The back of the cover description tells a poignant detail about Lincoln
                                                    which Saunders in the Q&amp;A tells us was the thought that formed for him the heart of this story. At the
                                                    time of his 11 year old son Willie's death by typhoid fever, it was reported that Lincoln went to the crypt
                                                    at night to hold his son's body. The grief that one can almost feel in that image is the essence of this
                                                    book and has been fully and imaginatively depicted. The grief - this book is so filled with Lincoln's grief,
                                                    it will break your heart. While this is told in such a unique way, it took me only a few pages to be pulled
                                                in. But the grief became overwhelming at times and I had to put it down for a break once in a while. <br /><br />
                                                The first thing I did before I decided to read this book was look up the definition of bardo. "
                                                (in Tibetan Buddhism) a state of existence between death and rebirth, varying in length according to a person's
                                                conduct in life and manner of, or age at, death. " (English Oxford Dictionary) I'm glad I did because most of this
                                                mixed narrative is comprised of the voices of the dead including Willie who are in the bardo. These conversations
                                                are interspersed with excerpts from historical texts mainly describing how they saw Lincoln suffering this
                                                tremendous loss, and as mentioned in the Q &amp; A with Saunders, some of the excerpts are imagined. It's
                                                    impossible to tell which are real and which are created as I read them. I decided not to look them up but to
                                                    accept Saunders' creative license . This is a novel, albeit not a straightforward telling. <br /><br /> I thought it
                                                    was a fascinating way to tell the story not just of the death of Willie but it is in many ways a commentary
                                                    on the man who was president during a trying time in our history, a commentary on the time, but also on
                                                        life and death. I recommend this to those who are open to something very different and very moving.<br /><br />
                                                        I received an ARC of this book from Random House</span>
                                                    <span className={styles.link} onClick={displayOnScreen}>...less</span>
                                                </React.Fragment>
                                                : <span className={styles.link} onClick={displayOnScreen}>...more</span>}
                                        </React.Fragment>
                                    </div>
                                </td>
                            </tr>
                            <tr className={styles.body}>
                                <td className={styles.coverInfo}>
                                    <a href="/book/show/8881004-the-coming-and-going-of-strangers">
                                        <img className={styles.bookImg} alt="The Coming and Going of Strangers" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327784031l/8881004._SX50_.jpg" />
                                    </a>
                                </td>
                                <td className={styles.titleInfo}>
                                    <a title="The Coming and Going of Strangers" href="/book/show/8881004-the-coming-and-going-of-strangers" className={styles.link}>
                                        The Coming and Going of Strangers
                                        </a>
                                </td>
                                <td className={styles.authorInfo}>
                                    <div class="value">
                                        <a href="/author/show/295297.Simon_Van_Booy" className={styles.link}>Van Booy, Simon</a>
                                    </div>
                                </td>
                                <td className={styles.ratingInfo}>
                                    <div className={styles.value}>    4.11
                                    </div>
                                </td>
                                <td className={styles.reviewInfo}>
                                    <div>
                                        <React.Fragment>
                                            <span className={styles.description}>It's a beautiful and sad but a strangely told story, and the narrative is different
                                            from anything I've read . The back of the cover description tells</span>
                                            {displayComment ?
                                                <React.Fragment>
                                                    <span className={styles.descriptionHidden}>It's a beautiful and sad but a strangely told story, and the narrative
                                                    is different from anything I've read . The back of the cover description tells a poignant detail about Lincoln
                                                    which Saunders in the Q&amp;A tells us was the thought that formed for him the heart of this story. At the
                                                    time of his 11 year old son Willie's death by typhoid fever, it was reported that Lincoln went to the crypt
                                                    at night to hold his son's body. The grief that one can almost feel in that image is the essence of this
                                                    book and has been fully and imaginatively depicted. The grief - this book is so filled with Lincoln's grief,
                                                    it will break your heart. While this is told in such a unique way, it took me only a few pages to be pulled
                                                in. But the grief became overwhelming at times and I had to put it down for a break once in a while. <br /><br />
                                                The first thing I did before I decided to read this book was look up the definition of bardo. "
                                                (in Tibetan Buddhism) a state of existence between death and rebirth, varying in length according to a person's
                                                conduct in life and manner of, or age at, death. " (English Oxford Dictionary) I'm glad I did because most of this
                                                mixed narrative is comprised of the voices of the dead including Willie who are in the bardo. These conversations
                                                are interspersed with excerpts from historical texts mainly describing how they saw Lincoln suffering this
                                                tremendous loss, and as mentioned in the Q &amp; A with Saunders, some of the excerpts are imagined. It's
                                                    impossible to tell which are real and which are created as I read them. I decided not to look them up but to
                                                    accept Saunders' creative license . This is a novel, albeit not a straightforward telling. <br /><br /> I thought it
                                                    was a fascinating way to tell the story not just of the death of Willie but it is in many ways a commentary
                                                    on the man who was president during a trying time in our history, a commentary on the time, but also on
                                                        life and death. I recommend this to those who are open to something very different and very moving.<br /><br />
                                                        I received an ARC of this book from Random House</span>
                                                    <span className={styles.link} onClick={displayOnScreen}>...less</span>
                                                </React.Fragment>
                                                : <span className={styles.link} onClick={displayOnScreen}>...more</span>}
                                        </React.Fragment>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                ) : (
                    <div className={styles.bookImgContainer}>
                        {myBooks.map((book) => (
                            <Book key={book.id} {...book} />
                        ))}</div>
                )
                }
            </div>
        </div>
    )
}
