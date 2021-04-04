import styles from './FollowUser.module.scss';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { database } from "../firebase";
import { getCurrentUser } from './service';



export default function FollowUser({ userId }) {

    const [user, setUser] = useState({});

    useEffect(() => {
        getCurrentUser(userId)
        // database.collection("users").where("id", "==", userId).get()
            .then((user) => {
                user.forEach((doc) => {
                    setUser(doc.data());
                });
            });
    }, [userId]);

    return (
        <Link to={"/user/" + userId} className={styles.link}>
            <img alt={user.fname} src={user.userImg} className={styles.img}/>
            <span> {user.fname}</span>
        </Link>
    )
}