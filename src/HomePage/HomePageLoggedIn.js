import React from "react";
import './HomePageLoggedIn.css'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'

export default function HomePageLoggedIn() {
    return (
        <React.Fragment>
            {/* header logged in */}
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
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" className="profile-btn">
                                <div className="profile-pic"></div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="profile-btn-dropdown">
                                <Dropdown.Item href="#/action-1" className="profile-name">Olga</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" className="sign-out-link">Sign out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </nav>
                </div>
            </header>
        </React.Fragment>
    )

}