import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from './UserPage.module.scss';
import { Nav } from "react-bootstrap";
import CurrentlyReading from "./CurrentlyReading";
import Rated from "./Rated";


export default function UserPage() {

    const [selectedTab, setSelectedTab] = useState("Currently Reading");
    const userProfile = true;

    const { userName } = useParams();

    // useEffect(() => {
    //     database.collection("reviewsList").where("forBookId", "==", currentId).get()
    //       .then((querySnapshot) => {
    //         let dbReviews = [];
    //         querySnapshot.forEach((doc) => {
    //           dbReviews.push(doc.data());
    //         });
    //         setReviews(dbReviews);
    //       });
    //   }, [currentId]);


    //   useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/users/${userId}/${selectedTab}`)
    //       .then((res) => res.json())
    //       .then((res) => setUserData(res));
    //   }, [userId, selectedTab]);


    const onTabChange = (eventKey) => {
        setSelectedTab(eventKey);
    };

    return (
        <div className={styles.mainContent}>
            <div className={styles.leftProfilePicture}>
                <img alt="Angela M" className={styles.profilePictureIcon} src="https://images.gr-assets.com/users/1512600770p6/4685500.jpg"></img>
                <div className={styles.profilePageStatsInfo}>
                    <a href="/review/list/4685500-angela-m?order=d&amp;sort=review&amp;view=reviews" className={styles.link}>1724 ratings</a>
                    <a href="/review/list/4685500-angela-m?order=d&amp;sort=review&amp;view=reviews" className={styles.link}> 1066 reviews</a>
                </div>
            </div>
            <div className={styles.userInfoBox}>
                {userProfile ? (<h1 className={styles.userProfileName}> Angela M
                    <Link to="/user/edit" className={styles.smallText}>(edit profile)</Link>
                </h1>
                ) :
                    (<React.Fragmet>
                        <h1 className={styles.userProfileName}> Angela M </h1>
                        <div className={styles.friendFollowModule}>
                            <button className={styles.friendFollowButton}>Follow</button>
                        </div>
                    </React.Fragmet>)
                }
                <div className={styles.infoBoxWrapper}>
                    <div className={styles.infoBoxRowTitle}>Details</div>
                    <div className={styles.infoBoxRowItem}> The United States </div>
                </div>
                {/* <div className={styles.infoBoxWrapper}>
                    <div className={styles.infoBoxRowTitle}>Activity</div>
                    <div className={styles.infoBoxRowItem}>
                        Joined in December 2010,
                        last active this month
                             </div>
                </div> */}
                <div className={styles.infoBoxWrapper}>
                    <div className={styles.infoBoxRowTitle}>Interests</div>
                    <div className={styles.infoBoxRowItem}> Reading and writing reviews, spending time with family. </div>
                </div>
                <div className={styles.infoBoxWrapper}>
                    <div className={styles.infoBoxRowTitle}>Favorite Books</div>
                    <div className={styles.infoBoxRowItem}> Literary fiction - contemporary and historical. Favorite all time book is The Great Gatsby.</div>
                </div>
            </div>
            <div className={styles.bigBoxInfo}>
                <div className={styles.h2Container}>
                    <h2 class={styles.h2Title}>Angela M’s Recent Updates</h2>
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
                {selectedTab === "Currently Reading" && <CurrentlyReading />}
                {selectedTab === "Want to Read" && <h2>Want to Read</h2>}
                {selectedTab === "Read" && <h2>Read</h2>}
                {selectedTab === "Rated" && <Rated isItUser={userProfile} />}
            </div>
        </div>
    )
}