import React from "react";

export default function HomePageLoggedIn() {
    return (
        <React.Fragment>
            {/* header logged in */}
            <header>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a href="/" className="logo"></a>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">My books</a></li>
                        <li><a href="/">Browse</a></li>
                    </ul>
                </nav>
                <input />
                <nav>
                    <ul>
                        <li><a href="/"></a></li>
                        <li><a href="/"></a></li>
                        <li><a href="/"></a></li>
                        <li><a href="/"></a></li>
                        <li><a href="/"></a></li>
                    </ul>
                </nav>
            </header>
        </React.Fragment>
    )

}