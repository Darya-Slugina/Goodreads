import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import styles from './Header.module.scss'
import firebase from "../firebase";
import PersonalNavGuest from './PersonalNavGuest'
import PersonalNavUser from './PersonalNavUser'
import SearchBar from '../SearchBar'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Header() {
    const loggedInUser = firebase.auth().currentUser;
    const genresList = useSelector((state) => state.genres.genres);
    const history = useHistory();

    const goToMyBooksPage = () => {
        if(loggedInUser) {
            history.push('/')
        } else {
            history.push('/login')
        }
    }

    return (
        <header className={styles.headerLogged}>
            <div className={styles.headerWrapper}>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a href="/" className={styles.logoLogged}></a>
                <nav className={styles.navLogged}>
                    <ul>
                        <Button variant='light' className={styles.navLoggedBtn} onClick={goToMyBooksPage}>My books</Button>
                        <Dropdown>
                            <Dropdown.Toggle variant='light' id="dropdown-basic" className={styles.navLoggedBtn}> Browse
                                    </Dropdown.Toggle>
                            <Dropdown.Menu className={styles.dropdownWrapper} variant='light'>
                                <div className={styles.navLoggedBtnDropdown}>
                                    {genresList.sort((a, b) => a.genre.localeCompare(b.genre)).map(el => (
                                        <Dropdown.Item key={el.id} variant='light'><Link to={"/genres/" + el.genre.toLowerCase()} className={styles.genreLink} >{el.genre}</Link></Dropdown.Item>
                                    ))
                                    }
                                </div>
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