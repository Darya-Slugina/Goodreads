import styles from './Destroy.module.scss';
import { Link } from "react-router-dom";
import Button from "./../common/Button";
import firebase, { database } from "../firebase";
import { useHistory } from "react-router-dom";
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { fetchUserLoggedIn } from "../RegistrationAndLoginPage/User.actions";

export default function Destroy() {

    const [error, setError] = useState(false);

    const history = useHistory();
    const dispatch = useDispatch();

    const deleteAccount = () => {
        const user = firebase.auth().currentUser;
        console.log(user.uid);

        user.delete().then(function () {
            console.log("User deleted");
            database.collection("users").doc(user.uid).delete()
                .then(() => {
                    console.log("Document successfully deleted!");
                    dispatch(fetchUserLoggedIn({}))
                    history.push("/");
                }).catch((err) => {
                    setError(true);
                    console.log("error", error);
                    console.log("Error removing document: ", err.message);
                });
            
        });
    }

    return (
        <div className={styles.mainContentContainer}>
            <div className={styles.container}>
                <h1 className={styles.title}>Delete My Account</h1>
                <div className={styles.mediumText}>
                    This will delete your account. The ratings and reviews you've posted, your comments, writing, events, etc. will be removed from the site.
                </div>
                <div className={styles.btnContainer}>
                    <Button value={"Delete My Account"} onClick={deleteAccount} />
                    <Link href="/user/edit" className={styles.cancel}>cancel</Link>
                </div>
               {error && <span className={styles.errorTextShow} >Please, logout and login again, if you want to delete your account.</span>}
            </div>
        </div>
    )
}