import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import styles from './UserPage.module.scss';
import { Nav } from "react-bootstrap";
import MyBooks from "./MyBooks";
import { useSelector, useDispatch } from "react-redux";
import { addToFavourite, removeFromFavourite } from "../RegistrationAndLoginPage/User.actions";
import FollowUser from "./FollowUser";
import { getCurrentUser, getReviewsByUser, setNewFriendRequest } from "./service"



export default function UserPage() {

    const [selectedTab, setSelectedTab] = useState("Currently Reading");
    const [user, setUser] = useState({});
    const [reviews, setReviews] = useState([]);
    const [buttonState, setButtonState] = useState("Follow");
    const [friendRequest, setFriendRequest] = useState(false);
    const [approvedFriend, setApprovedFriend] = useState(false);

    const dispatch = useDispatch();

    const { userId } = useParams();
    const books = useSelector((state) => state.books.books);
    const loggedInUser = useSelector((state) => state.user.user);

    useEffect(() => {
        getCurrentUser(userId)
            .then((user) => {
                user.forEach((doc) => {
                    setUser(doc.data());
                });
            });
    }, [userId]);

    useEffect(() => {
        getReviewsByUser(userId)
            .then((querySnapshot) => {
                const dbReviews = [];
                querySnapshot.forEach((doc) => {
                    dbReviews.push(doc.data())
                });

                setReviews(dbReviews);
            });
    }, [userId]);

    useEffect(() => {
        if (loggedInUser && loggedInUser.myFriends && loggedInUser.myFriends.includes(userId)) {
            setApprovedFriend(true);
        }
    }, [userId, loggedInUser.myFriends, loggedInUser])

    const isCurrentUser = useMemo(() => {
        if (loggedInUser && userId === loggedInUser.id) {
            return true;
        }
        return false;
    }, [userId, loggedInUser])

    useEffect(() => {
        if (loggedInUser && loggedInUser.favouritesUser && loggedInUser.favouritesUser.includes(userId)) {
            setButtonState("Unfollow");
        }
    }, [loggedInUser, userId])

    const currentlyReading = useMemo(() => {
        if (user && user.currentlyReading) {
            return books.filter(book => user.currentlyReading.includes(book.id));
        }
        return []
    }, [books, user])

    const readBooks = useMemo(() => {
        if (user && user.read) {
            return books.filter(book => user.read.includes(book.id));
        }
        return []
    }, [books, user])

    const wantToRead = useMemo(() => {
        if (user && user.wantToRead) {
            return books.filter(book => user.wantToRead.includes(book.id));
        }
        return []
    }, [books, user])

    const ratedBooks = useMemo(() => {
        if (user) {
            let booksId = reviews.filter(el => el.rate).map(el => el.forBookId);
            let rated = [];
            books.forEach(book => {
                if (booksId.includes(book.id)) {
                    rated.push(book);
                }
            });

            return rated
        }
        return []
    }, [reviews, user, books])


    const rateCount = reviews.filter(el => el.rate).length;

    const onTabChange = (eventKey) => {
        setSelectedTab(eventKey);
    };


    const addToFolowers = () => {
        if (loggedInUser.id) {
            if (buttonState === "Follow") {
                setButtonState("Unfollow")
                dispatch(addToFavourite(userId, loggedInUser.id))

            } else if (buttonState === "Unfollow") {
                setButtonState("Follow");
                dispatch(removeFromFavourite(userId, loggedInUser.id))
            }
        }
    }

    const sendFriendRequest = () => {
        setNewFriendRequest(loggedInUser.id, loggedInUser.fname, userId, user.fname)
        setFriendRequest(!friendRequest)
    }

    return (
        <div className={styles.mainContent}>
            <div className={styles.leftContainer}>
                <div className={styles.leftProfilePicture}>
                    <img alt={user.fname} className={styles.profilePictureIcon} src={user.userImg}></img>
                    <div className={styles.profilePageStatsInfo}>
                        {reviews ?
                            <span  className={styles.link}>{rateCount} ratings</span>
                            :
                            <span  className={styles.link}> 0 ratings</span>
                        }
                        {reviews ?
                            <span  className={styles.link}> {reviews.length} reviews</span>
                            :
                            <span  className={styles.link}> 0 reviews</span>
                        }
                    </div>
                </div>
                <div className={styles.userInfoBox}>
                    {isCurrentUser ? (<h1 className={styles.userProfileName}>  {user.fname}
                        <Link to="/user/edit" className={styles.smallText} user={user}>(edit profile)</Link>
                    </h1>
                    ) :
                        <React.Fragment>
                            <h1 className={styles.userProfileName}>  {user.fname}</h1>
                            {loggedInUser.id ? <div className={styles.friendFollowModule}>
                                <button className={styles.friendFollowButton} onClick={addToFolowers}>{buttonState}</button>
                             {!approvedFriend &&  <button className={friendRequest ? styles.friendButtonSent : styles.friendButton} onClick={sendFriendRequest}>Add Friend</button> }
                             {!approvedFriend &&  <span className={friendRequest ? styles.friendRequest : styles.friendRequestNone}> Your request has been successfully sent </span> }
                            </div> : null}
                        </React.Fragment>
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
                    {user.favouriteBooks ?
                        (<div className={styles.infoBoxWrapper}>
                            <div className={styles.infoBoxRowTitle}>Favorite Books</div>
                            <div className={styles.infoBoxRowItem}> {user.favouriteBooks}</div>
                        </div>) : null}
                </div>
                <div className={styles.bigBoxInfo}>
                    <div className={styles.h2Container}>
                        <h2 className={styles.h2Title}>{user.fname}???s Recent Updates</h2>
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
                    {selectedTab === "Rated" && <MyBooks books={ratedBooks} />}
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div>
                    <div className={styles.h2Container}>
                        <h2 className={styles.h2Title}>
                            People {user.fname} is Following
                        </h2>
                    </div>
                    <div className={styles.followingContainer}>
                        <div>
                            {user && user.favouritesUser && user.favouritesUser.map((user) => (
                                <FollowUser userId={user} key={user} />
                            )
                            )}
                        </div>
                    </div>
                    <div className={styles.h2Container}>
                        <h2 className={styles.h2Title}>
                            {user.fname}'s Friends
                        </h2>
                    </div>
                    <div className={styles.friendsContainer}>
                        <div>
                            {user && user.myFriends && user.myFriends.map((user) => (
                                <FollowUser userId={user} key={user} />
                            )
                            )}
                        </div>
                    </div>
                    <div className={styles.h2Container}>
                        <h2 className={styles.h2Title}>
                            <Link to={"/genres"} className={styles.h2Title}>Favourite genres</Link>
                        </h2>
                    </div>
                    <div className={styles.genresContainer}>
                        {user && user.favouriteGenres && user.favouriteGenres.map((genre) => (
                            <Link to={"/genres/" + genre} key={genre} className={styles.genre}>{genre}</Link>
                        )
                        )}
                    </div>
                </div>
            </div>
        </div>

    )
}