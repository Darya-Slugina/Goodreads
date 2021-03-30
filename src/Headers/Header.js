import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import styles from './Header.module.scss'

export default function Header(){
    return(
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
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </ul>
                    </nav>
                    <input type="text" placeholder="Search books" className={styles.searchLogged} />
                    <nav className={styles.personalNav}>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" className={styles.profileBtn}>
                                <div className={styles.profilePic}></div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={styles.profileBtnDropdown}>
                                <Dropdown.Item href="#/action-1" className={styles.profileName}>Olga</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" className={styles.signOutLink}>Sign out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </nav>
                </div>
            </header>
    )
}