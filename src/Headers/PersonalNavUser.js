import Dropdown from 'react-bootstrap/Dropdown'
import styles from './Header.module.scss'
import { useSelector } from "react-redux";
import firebase from "../firebase";
import { useHistory } from "react-router-dom";

export default function PersonalNavUser() {
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

    return (
        <nav className={styles.personalNav}>
            <div className={styles.notifications}>
                <span className={styles.notificationIcon} onClick={showNotifications} />
                <div className={styles.dropdownContainer} id="dropdownContainer">
                    <span className={styles.dropdownText}>No notifications</span>
                </div>

            </div>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className={styles.profileBtn}>
                    <div className={styles.profilePic}></div>
                </Dropdown.Toggle>
                <Dropdown.Menu className={styles.profileBtnDropdown}>
                    <Dropdown.Item href={"/user/"+user.id} className={styles.profileName}>{user.fname}</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" className={styles.signOutLink} onClick={logoutUser}>Sign out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </nav>
    )
}