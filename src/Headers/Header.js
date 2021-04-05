import styles from './Header.module.scss'
import '../common/DropdownMenu.scss'
import PersonalNavGuest from './PersonalNavGuest'
import PersonalNavUser from './PersonalNavUser'
import SearchBar from '../SearchBar'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useRef, useState, useEffect } from 'react'

export default function Header() {
    const loggedInUser = useSelector((state) => state.user.user);
    const genresList = useSelector((state) => state.genres.genres);
    const history = useHistory();
    const [isActive, setIsActive] = useState(false);

    const dropdownRef = useRef(null);

    const goToMyBooksPage = () => {
        if(loggedInUser.id) {
            history.push('/')
        } else {
            history.push('/login')
        }
    }

    const showDropdown = () => {
        setIsActive(true);
    }

    useEffect(() => {
        const pageClickEvent = (e) => {
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setIsActive(!isActive);
            }
        };

        if (isActive) {
            window.addEventListener('click', pageClickEvent);
        }

        return () => {
            window.removeEventListener('click', pageClickEvent);
        }

    }, [isActive]);

    return (
        <header className={styles.headerLogged}>
            <div className={styles.headerWrapper}>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                {loggedInUser.id? <Link to="/genres" className={styles.logoLogged}></Link> : <Link to="/" className={styles.logoLogged}></Link>}
                <nav className={styles.navLogged}>
                    <ul>
                        <button variant='light' className={styles.navLoggedBtn} onClick={goToMyBooksPage}>My books</button>
                        <div>
                            <button className={styles.navLoggedBtn} onClick={showDropdown}>Browse</button>
                            <nav ref={dropdownRef} className={` ${styles.dropdownWrapper} menu ${isActive ? 'active' : 'inactive'}`}>
                                <ul className={styles.navLoggedBtnDropdown}>
                                    {genresList.sort((a, b) => a.genre.localeCompare(b.genre)).map(el => (
                                        <li key={el.id} ><Link to={"/genres/" + el.genre.toLowerCase()} className={styles.genreLink} >{el.genre}</Link></li>
                                    ))
                                    }
                                </ul>
                            </nav>
                        </div>
                    </ul>
                </nav>
                <SearchBar />
                {loggedInUser.id ? <PersonalNavUser /> : <PersonalNavGuest />}
            </div>
        </header>
    )
}