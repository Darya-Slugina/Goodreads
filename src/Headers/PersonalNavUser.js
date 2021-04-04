import Dropdown from 'react-bootstrap/Dropdown'
import styles from './Header.module.scss'
import { useSelector } from "react-redux";
import firebase, { database } from "../firebase";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState, useMemo } from "react";

export default function PersonalNavUser() {
    const [notifications, setNotifications] = useState([]);

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

    const approveFriend = () => {

    }

    const deleteRequest = (id) => {

       const subscription = database.collection('friendsList').where('id', '==', id).get()

            .then((querySnapshot) => {
                let id = [];
                (querySnapshot).forEach(doc => {
                    console.log(doc.data());
                    console.log(doc.id);
                    id = doc.id;
                })

                database.collection('friendsList').doc(id).update({
                    status: "rejected",
                })
                    .then(() => {
                        console.log("Document successfully updated!");
                    })
                    .catch((error) => {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    })
            })
            return () => {
                subscription();
            }
    }

    useEffect(() => {
        if (user.id) {
            database.collection('friendsList').where('requestTo', '==', user.id).onSnapshot(snapshot => {
                console.log('Snapshot: ', snapshot);
                let notif = [];
                snapshot.forEach(doc =>
                    notif.push(doc.data()))
                setNotifications(notif);

            })
            //   database.collection('friendsList').where('requestFrom', '==', user.id).onSnapshot(snapshot => {
            //     console.log('Snapshot: ', snapshot);
            //     snapshot.forEach(doc => console.log(doc.data()))
            //   })
        }

    }, [user])

    return (
        <nav className={styles.personalNav}>
            <div className={styles.notifications}>
                <span className={styles.notificationIcon} onClick={showNotifications} />
                <span className={notifications.length > 0 ? styles.notifCount : styles.notifCountNone}>{notifications.length}</span>
                <div className={styles.dropdownContainer} id="dropdownContainer">
                    <span className={notifications.length ? styles.dropdownTextNone : styles.dropdownText}>No notifications</span>
                    {notifications.map(el => (
                        <div key={el.id} className={styles.messageContainer}>
                            <span className={styles.message} >{`You have friend request from ${el.requestFrom}`}</span>
                            <div className={styles.buttonsContainer}>
                                <span className={styles.buttons} onClick={() => approveFriend(el.id)}>Approve</span>
                                <span className={styles.buttons} onClick={() => deleteRequest(el.id)}>X</span>
                            </div>
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
                    <Dropdown.Item href="/" className={styles.signOutLink} onClick={logoutUser}>Sign out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </nav>
    )
}