import React from 'react';
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import { useLocation } from 'react-router-dom'
import HomePageHeader from '../Headers/HomePageHeader'
// import styles from './GuestUserHeader.module.scss'


export default function GuestUserHeader() {
    let location = useLocation();
    console.log(location.pathname)

    if (location.pathname.length > 0) {
        return (
            <React.Fragment>
                <header className="header-logged">
                    <div className="header-wrapper">
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                        <a href="/" className="logo-logged"></a>
                        <nav className="nav-logged">
                            <ul>
                                <Button className="nav-logged-btn">Home</Button>
                                <Button className="nav-logged-btn">My books</Button>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic" className="nav-logged-btn"> Browse
                                        </Dropdown.Toggle>
                                    <Dropdown.Menu className="nav-logged-btn-dropdown">
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </ul>
                        </nav>
                        <input type="text" placeholder="Search books" className="search-logged" />
                        <nav className="personal-nav">
                            <Button className="nav-logged-btn">Sign In</Button>
                            <Button className="nav-logged-btn">Join</Button>
                        </nav>
                    </div>
                </header>
            </React.Fragment>
        )
    } else {
        return <HomePageHeader />
    }



}