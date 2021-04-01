import Dropdown from 'react-bootstrap/Dropdown'
import styles from './Header.module.scss'
import { useSelector } from "react-redux";
import firebase from "../firebase";

export default function PersonalNavGuest() {
    const userName = useSelector((state) => state.user.user.fname);

    const logoutUser = () => {
        firebase.auth().signOut().then(() => {
            console.log("Sign-out successful");
          }).catch((error) => {
            console.log("An error happened." + error);
          });
    }
    return (
        <nav className={styles.personalNav}>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className={styles.profileBtn}>
                    <div className={styles.profilePic}></div>
                </Dropdown.Toggle>
                <Dropdown.Menu className={styles.profileBtnDropdown}>
                    <Dropdown.Item href="#/action-1" className={styles.profileName}>{userName}</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" className={styles.signOutLink} onClick={logoutUser}>Sign out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </nav>
    )
}