import Dropdown from 'react-bootstrap/Dropdown'
import styles from './Header.module.scss'
import { useSelector } from "react-redux";
import firebase, { database } from "../firebase";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function PersonalNavUser() {
    const [notifications, setNotifications] = useState([]);
    const [rejected, setRejected] = useState([]);
    const [approved, setApproved] = useState([]);


    const user = useSelector((state) => state.user.user);
    const history = useHistory();

    const logoutUser = () => {
        firebase.auth().signOut().then(() => {
            console.log("Sign-out successful");
            history.push("/");
        }).catch((error) => {
            console.log("An error happened." + error);
        });
    }

    const showNotifications = () => {
        let dropdown = document.getElementById("dropdownContainer");
        dropdown.classList.toggle("show");
    }

    const answerOnRequest = (id, action) => {

        database.collection('friendsRequests').where('id', '==', id).get()

            .then((querySnapshot) => {
                let id = [];
                (querySnapshot).forEach(doc => {
                    console.log(doc.data());
                    console.log(doc.id);
                    id = doc.id;
                })

                database.collection('friendsRequests').doc(id).update({
                    status: action,
                })
                    .then(() => {
                        console.log("Document successfully updated!");
                        let newNote = notifications.filter(el => el.id !== id)
                        setNotifications(newNote);
                    })
                    .catch((error) => {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    })
            })
    }

    const removeFromNotifications = (id, action) => {
        if (action === "approve") {
            let newNotif = approved.filter(el => el.id !== id);
            setApproved(newNotif);
        } else if (action === "reject") {
            let newNotif = rejected.filter(el => el.id !== id);
            setRejected(newNotif);
        }
    }

    useEffect(() => {
        if (user.id) {
            database.collection('friendsRequests').where('requestTo', '==', user.id).where("status", "==", "sent").onSnapshot(snapshot => {

                let notif = [];
                snapshot.forEach(doc =>
                    notif.push(doc.data()))
                    console.log("sent");

                    setNotifications(notif);

                

            })

            database.collection('friendsRequests').where('requestFrom', '==', user.id).where("status", "==", "approve").onSnapshot(snapshot => {

                let notif = [];
                snapshot.forEach(doc =>
                    notif.push(doc.data()))
                    console.log("approve");
                setApproved(notif);
                user.myFriends.push(...notif);
            })

            database.collection('friendsRequests').where('requestFrom', '==', user.id).where("status", "==", "reject").onSnapshot(snapshot => {

                let notif = [];
                snapshot.forEach(doc =>
                    notif.push(doc.data()))
                setRejected(notif);
                console.log("reject");

            })
        }

    }, [user])

    return (
        <nav className={styles.personalNav}>
            <div className={styles.notifications}>
                <span className={styles.notificationIcon} onClick={showNotifications} />
                <span className={notifications.length > 0 ? styles.notifCount : styles.notifCountNone}>{[...notifications, ...rejected, ...approved].length}</span>
                <div className={styles.dropdownContainer} id="dropdownContainer">
                    <span className={notifications.length ? styles.dropdownTextNone : styles.dropdownText}>No notifications</span>
                    {[...notifications, ...rejected, ...approved].map(el => (
                        <div key={el.id} className={styles.messageContainer}>
                            {el.status === "reject" &&
                                <React.Fragment>
                                    <span className={styles.message} >{`Your friend request to ${el.requestFrom} was rejected`}</span>
                                    <div className={styles.buttonsContainer}>
                                        <span className={styles.buttons} onClick={() => removeFromNotifications(el.id, "reject")}>X</span>
                                    </div>
                                </React.Fragment>}

                            {el.status === "approve" &&
                                <React.Fragment>
                                    <span className={styles.message} >{`Your friend request to ${el.requestFrom} was approved`}</span>
                                    <div className={styles.buttonsContainer}>
                                        <span className={styles.buttons} onClick={() => removeFromNotifications(el.id, "reject")}>X</span>
                                    </div>
                                </React.Fragment>}

                            {el.status === "send" &&
                                <React.Fragment>
                                    <span className={styles.message} >{`You have friend request from ${el.requestFrom}`}</span>
                                    <div className={styles.buttonsContainer}>
                                        <span className={styles.buttons} onClick={() => answerOnRequest(el.id, "approve")}>Approve</span>
                                        <span className={styles.buttons} onClick={() => answerOnRequest(el.id, "reject")}>X</span>
                                    </div>
                                </React.Fragment>}
                        </div>
                    )
                    )}
                </div>

            </div>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className={styles.profileBtn}>
                    <div className={styles.profilePic}></div>
                </Dropdown.Toggle>
                <Dropdown.Menu className={styles.profileBtnDropdown}>
                    <Dropdown.Item href={"/user/" + user.id} className={styles.profileName}>{user.fname}</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" className={styles.signOutLink} onClick={logoutUser}>Sign out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </nav>
    )
}