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

                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                        {/* <a href="/"></a>
                        <div className="dropdown-profile">
                            <div className="dropdown-profile-wrapper">
                                <span className="profile-name">Olga</span>
                                <ul>
                                    <li><a href="" className="sign-out-link">Sign out</a></li>
                                </ul>
                            </div>
                        </div> */}
                    </nav>
                </div>
            </header>
            <main>
                <div className="main-container">
                    <div className="text-box-wrapper">
                        <div className="text-box" style={{ marginRight: "40px" }}>
                            <h2>Deciding what to read next?</h2>
                            <p>You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.</p>
                        </div>
                        <div className="text-box">
                            <h2>What are your friends reading?</h2>
                            <p>Chances are your friends are discussing their favorite (and least favorite) books on Goodreads.</p>
                        </div>
                    </div>
                    <div className="discovery-box"></div>
                    <div id="browseBox">
                        <h2>Search and browse books</h2>
                        <input type="text" placeholder="Title / Author" />
                    </div>
                </div>
            </main>
        </React.Fragment>
    )

}