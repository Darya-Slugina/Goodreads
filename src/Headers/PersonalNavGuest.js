import Button from 'react-bootstrap/Button'
import styles from './Header.module.scss'
import { Link } from "react-router-dom";

export default function PersonalNavGuest() {
    return (
        <nav className={styles.personalNav}>
            <Link to="/login" ><Button className={styles.navLoggedBtn}>Sign In</Button></Link>
            <Link to="/registration" ><Button className={styles.navLoggedBtn}>Join</Button></Link>
        </nav>
    )
}