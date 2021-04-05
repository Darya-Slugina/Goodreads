import Dropdown from 'react-bootstrap/Dropdown'
import styles from './Header.module.scss'
import { useSelector, useDispatch } from "react-redux";
import firebase, { database } from "../firebase";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { addToFriendsList, fetchUserLoggedIn } from "../RegistrationAndLoginPage/User.actions";

export default function PersonalNavUser() {
    const [notifications, setNotifications] = useState([]);
    const [rejected, setRejected] = useState([]);
    const [approved, setApproved] = useState([]);
    const [btnState, setBtnState] = useState(false);

    const user = useSelector((state) => state.user.user);
    const history = useHistory();
    const dispatch = useDispatch();

    const logoutUser = () => {
        firebase.auth().signOut().then(() => {
            console.log("Sign-out successful");
            dispatch(fetchUserLoggedIn({}))
            history.push("/");
        }).catch((error) => {
            console.log("An error happened." + error);
        });
    }

    const showNotifications = () => {
        setBtnState(!btnState);
    }

    const answerOnRequest = (docId, action) => {

        database.collection('friendsRequests').where('id', '==', docId).get()

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
                        console.log("Document successfully updated!!!");
                        console.log("el.id", notifications[0].id, "id", docId)
                        let newNote = notifications.filter(el => el.id !== docId)
                        console.log("newNote", newNote)
                        setNotifications(newNote);
                    })
                    .catch((error) => {
                        console.error("Error updating document: ", error);
                    })
            })
        return () => {
            // subscription();
        }
    }

    const removeFromNotifications = (id) => {

        let newRejectedNotif = rejected.filter(el => el.id !== id);
        let newApprovedNotif = approved.filter(el => el.id !== id);

        database.collection('friendsRequests').where('id', '==', id).get()

        .then((querySnapshot) => {
            let docId = [];
            (querySnapshot).forEach(doc => {
                console.log(doc.data());
                console.log(doc.id);
                docId = doc.id;
            })

            database.collection('friendsRequests').doc(docId).update({
                status: "fulfilled",
            })
                .then(() => {
                    console.log("Document successfully updated!!!");
                    setRejected(newRejectedNotif);
                    setApproved(newApprovedNotif);
                })
                .catch((error) => {
                    console.error("Error updating document: ", error);
                })
        })
        
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
        }
    }, [user])

    useEffect(() => {
        if (user.id) {
            database.collection('friendsRequests').where('requestFrom', '==', user.id).where("status", "==", "approve").onSnapshot(snapshot => {

                let notif = [];
                snapshot.forEach(doc => {
                    const request = doc.data();
                    dispatch(addToFriendsList(request.requestTo, user.id))
                    notif.push(request)
                })

                setApproved(notif);
            })
        }
    }, [])

    useEffect(() => {
        if (user.id) {

            database.collection('friendsRequests').where('requestFrom', '==', user.id).where("status", "==", "reject").onSnapshot(snapshot => {

                let notif = [];
                snapshot.forEach(doc =>
                    notif.push(doc.data()))
                setRejected(notif);
                console.log("reject",notif);

            })
        }

    }, [user])

const allNotifications = [...notifications, ...rejected, ...approved];

    console.log(allNotifications.length);

    return (
        <nav className={styles.personalNav}>
            <div className={styles.notifications}>
                <span className={styles.notificationIcon} onClick={showNotifications} />
                <span className={allNotifications.length > 0 ? styles.notifCount : styles.notifCountNone}>{allNotifications.length}</span>
                <div className={styles.dropdownContainer} id="dropdownContainer">
                    <span className={allNotifications.length ? styles.dropdownTextNone : styles.dropdownText}>No notifications</span>
                    {allNotifications.map(el => (
                        <div key={el.id} className={styles.messageContainer}>
                                {console.log("here", el.status)}
                            {el.status === "reject" &&
                                <React.Fragment>
                                    <span className={styles.message} >{`Your friend request to ${el.requestFrom} was rejected`}</span>
                                    <div className={styles.buttonsContainer}>
                                        <span className={styles.buttons} onClick={() => removeFromNotifications(el.id)}>X</span>
                                    </div>
                                </React.Fragment>}

                            {el.status === "approve" &&
                                <React.Fragment>
                                    <span className={styles.message} >{`Your friend request to ${el.requestFrom} was approved`}</span>
                                    <div className={styles.buttonsContainer}>
                                        <span className={styles.buttons} onClick={() => removeFromNotifications(el.id)}>X</span>
                                    </div>
                                </React.Fragment>}

                            {el.status === "sent" &&
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
                <Dropdown.Toggle id="dropdown-basic" className={styles.profileBtn} variant='light'>
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