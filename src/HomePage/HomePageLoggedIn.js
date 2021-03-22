import React from "react";
import './HomePageLoggedIn.css'

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
                            <li><a href="/">Home</a></li>
                            <li><a href="/">My books</a></li>
                            <li><a href="/">Browse</a></li>
                        </ul>
                    </nav>
                    <input type="text" placeholder="Search books" className="search-logged" />
                    <nav className="personal-nav">
                        <a href=""></a>
                        <div className="dropdown-profile">
                            <div className="dropdown-profile-wrapper">
                                <span className="profile-name">Olga</span>
                                <ul>
                                    <li><a href="" className="sign-out-link">Sign out</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                </div>
            </header>
        </React.Fragment>
    )

}