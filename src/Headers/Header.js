import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import styles from './Header.module.scss'
import firebase from "../firebase";
import PersonalNavGuest from './PersonalNavGuest'
import PersonalNavUser from './PersonalNavUser'
import SearchBar from '../SearchBar'
import { useSelector } from "react-redux";

export default function Header() {
    const loggedInUser = firebase.auth().currentUser;
    const genresList = useSelector((state) => state.genres.genres);

    return (
        <header className={styles.headerLogged}>
            <div className={styles.headerWrapper}>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a href="/" className={styles.logoLogged}></a>
                <nav className={styles.navLogged}>
                    <ul>
                        <Button className={styles.navLoggedBtn}>Home</Button>
                        <Button className={styles.navLoggedBtn}>My books</Button>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" className={styles.navLoggedBtn}> Browse
                                    </Dropdown.Toggle>
                            <Dropdown.Menu className={styles.navLoggedBtnDropdown}>
                                {genresList.map(genre => (
                                    <Dropdown.Item key={genre.id}>{genre.genre}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </ul>
                </nav>
                <SearchBar />
                {loggedInUser ? <PersonalNavUser /> : <PersonalNavGuest />}
            </div>
        </header>
    )
}