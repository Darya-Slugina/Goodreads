import styles from './FollowUser.module.scss';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { database } from "../firebase";

 
export default function FollowUser( {userId} ) {

    const [user, setUser] = useState({});

    useEffect(() => {
        database.collection("users").where("id", "==", userId).get()
            .then((user) => {
                user.forEach((doc) => {
                    setUser(doc.data());
                });
            });
    }, [userId]);

    return (
        <Link to={"/user/" + userId} className={styles.link}>
            <img src={user.userImg} alt={user.fname} className={styles.img}/>
        </Link> 
    )
}






