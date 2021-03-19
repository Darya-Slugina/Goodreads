import styles from "./HomePage.module.css"
import "../styles/HomePage.css"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React from "react"

export default function HomePage() {
    return (
        <React.Fragment>
            <header>
                <div className={styles.navWrapper}>
                    <nav>
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                        <a href="/" className="logo"></a>
                        <div className="form-wrapper">
                            <div className="form-box">
                                <Form.Control type="email" placeholder="Enter email" />
                                <div className="remember-me-wrapper">
                                    <input type="checkbox" checked id="remember-me" />
                                    <label for="remember-me">Remember me</label>
                                </div>
                            </div>
                            <div className="form-box">
                                <input type="password" placeholder="Password" />
                            </div>
                            <Button variant="dark" className="button button-dark">Sign in</Button>
                        </div>
                    </nav>
                </div>
                <div className="new-account-wrapper">
                    <h2>New here? Create a free account!</h2>
                    <form>
                        <input aria-label="Name" placeholder="Name" maxlength="50" size="50" type="text" id="user_first_name"></input>
                        <input aria-label="Email address" placeholder="Email address" type="email" id="user_email"></input>
                        <input id="user_password_signup" aria-label="Password" placeholder="Password" maxlength="128" size="128" type="password" ></input>
                        <div className="sign-up-wrapper">
                            <Button variant="dark" className="button button-dark" id="sign-up-btn">Sign up</Button>
                            <p>By clicking “Sign up” I agree to the Goodreads Terms of Service and confirm that I am at least 13 years old.</p>
                        </div>
                    </form>
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
                        <input type="text" placeholder="Title / Author"/>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )

}