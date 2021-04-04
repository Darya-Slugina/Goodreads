import styles from './Destroy.module.scss';
import { Link } from "react-router-dom";
import Button from "./../common/Button";
import firebase, { database } from "../firebase";
import { useHistory } from "react-router-dom";


export default function Destroy() {

    const history = useHistory();

    // const deleteAccount = () => {
    //     const user = firebase.auth().currentUser;
    //     console.log(user.uid);

    //     user.delete().then(function () {
    //         console.log("User deleted");
    //         database.collection("users").doc(user.uid).delete()
    //             .then(() => {
    //                 console.log("Document successfully deleted!");
    //             }).catch((error) => {
    //                 console.error("Error removing document: ", error);
    //                 document.getElementById("error").style.display = "block";
    //             });
    //         history.push("/");
    //     });
    // }

    return (
        <div className={styles.mainContentContainer}>
            <div className={styles.container}>
                <h1 className={styles.title}>Delete My Account</h1>
                <div className={styles.mediumText}>
                    This will delete your account. The ratings and reviews you've posted, your comments, writing, events, etc. will be removed from the site.
                </div>
                <div className={styles.btnContainer}>
                    {/* <Button value={"Delete My Account"} onClick={deleteAccount} /> */}
                    <Link href="/user/edit" className={styles.cancel}>cancel</Link>
                </div>
                <span className={styles.errorText} id="error">Please, logout and login again, if you want to delete your account.</span>
            </div>
        </div>
    )
}