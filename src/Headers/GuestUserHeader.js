import React from 'react';
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import { useLocation } from 'react-router-dom'
import HomePageHeader from '../Headers/HomePageHeader'
import styles from './Header.module.scss'


export default function GuestUserHeader() {
    let location = useLocation();
    console.log(location.pathname)

    if (location.pathname.length > 0) {
        return (
            <React.Fragment>
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
                            <Button className={styles.navLoggedBtn}>Sign In</Button>
                            <Button className={styles.navLoggedBtn}>Join</Button>
                        </nav>
                    </div>
                </header>
            </React.Fragment>
        )
    } else {
        return <HomePageHeader />
    }



}