import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import styles from './UserPage.module.scss';
import { Nav } from "react-bootstrap";
import MyBooks from "./MyBooks";
import { database } from "../firebase";
import { useSelector } from "react-redux";


export default function UserPage() {

    const [selectedTab, setSelectedTab] = useState("Currently Reading");
    const [user, setUser] = useState({});
    const [reviews, setReviews] = useState([]);
    const userProfile = true;

    const { id } = useParams();
    const books = useSelector((state) => state.books.books);

    console.log(user);



    useEffect(() => {
        database.collection("users").doc(id).get()
            .then((user) => {
                setUser(user.data());
            });
    }, [id]);

    useEffect(() => {
        database.collection("reviewsList").where("userId", "==", id).get()
            .then((querySnapshot) => {
                const dbReviews = [];
                querySnapshot.forEach((doc) => {
                    dbReviews.push(doc.data())
                });

                setReviews(dbReviews);
            });
    }, [id]);



    const currentlyReading = useMemo(() => {
        if (user.currentlyReading) {
            return books.filter(book => user.currentlyReading.includes(book.id));
        }
        return []
    }, [books, user])

    const readBooks = useMemo(() => {
        if (user.read) {
            return books.filter(book => user.read.includes(book.id));
        }
        return []
    }, [books, user])

    const wantToRead = useMemo(() => {
        if (user.wantToRead) {
            return books.filter(book => user.wantToRead.includes(book.id));
        }
        return []
    }, [books, user])


    const onTabChange = (eventKey) => {
        setSelectedTab(eventKey);
    };

    return (
        <div className={styles.mainContent}>
            <div className={styles.leftProfilePicture}>
                <img alt={user.fname} className={styles.profilePictureIcon} src={user.userImg}></img>
                <div className={styles.profilePageStatsInfo}>
                    {user.rated ?
                        <a href="/review/list/4685500-angela-m?order=d&amp;sort=review&amp;view=reviews" className={styles.link}>{user.rated.length} ratings</a>
                        :
                        <a href="/review/list/4685500-angela-m?order=d&amp;sort=review&amp;view=reviews" className={styles.link}> 0 ratings</a>
                    }
                    {reviews ?
                        <a href="/review/list/4685500-angela-m?order=d&amp;sort=review&amp;view=reviews" className={styles.link}> {reviews.length} reviews</a>
                        :
                        <a href="/review/list/4685500-angela-m?order=d&amp;sort=review&amp;view=reviews" className={styles.link}> 0 reviews</a>
                    }
                </div>
            </div>
            <div className={styles.userInfoBox}>
                {userProfile ? (<h1 className={styles.userProfileName}>  {user.fname}
                    <Link to="/user/edit" className={styles.smallText} user={user}>(edit profile)</Link>
                </h1>
                ) :
                    (<React.Fragmet>
                        <h1 className={styles.userProfileName}> {user.fname} </h1>
                        <div className={styles.friendFollowModule}>
                            <button className={styles.friendFollowButton}>Follow</button>
                        </div>
                    </React.Fragmet>)
                }
                {(user.interests || user.city) ?
                    (
                        <div className={styles.infoBoxWrapper}>
                            <div className={styles.infoBoxRowTitle}>Details</div>
                            <div className={styles.infoBoxRowItem}> {user.country}, {user.city} </div>
                        </div>
                    ) :
                    (
                        <div className={styles.infoBoxWrapper}>
                            <div className={styles.infoBoxRowItem}> No information for display yet. </div>
                        </div>)
                }
                {user.interests ?
                    (<div className={styles.infoBoxWrapper}>
                        <div className={styles.infoBoxRowTitle}>Interests</div>
                        <div className={styles.infoBoxRowItem}> {user.interests} </div>
                    </div>) : null}
                {user.favouriteBook ?
                    (<div className={styles.infoBoxWrapper}>
                        <div className={styles.infoBoxRowTitle}>Favorite Books</div>
                        <div className={styles.infoBoxRowItem}> {user.favouriteBook}</div>
                    </div>) : null}
            </div>
            <div className={styles.bigBoxInfo}>
                <div className={styles.h2Container}>
                    <h2 class={styles.h2Title}>{user.fname}’s Recent Updates</h2>
                    <Nav variant="tabs" defaultActiveKey={selectedTab} onSelect={onTabChange} className={styles.navBar}>
                        <Nav.Item>
                            <Nav.Link eventKey="Currently Reading">Currently Reading</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Want to Read">Want to Read</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Read">Read</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Rated">Rated</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                {selectedTab === "Currently Reading" && <MyBooks books={currentlyReading} />}
                {selectedTab === "Want to Read" && <MyBooks books={wantToRead} />}
                {selectedTab === "Read" && <MyBooks books={readBooks} />}
                {selectedTab === "Rated" && <MyBooks books={readBooks} />}
            </div>
        </div>
    )
}