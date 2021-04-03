import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './HomePageHeader.module.scss';
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from 'react';
import { authenticateUser } from "../RegistrationAndLoginPage/User.actions";
import { registerUser } from "../RegistrationAndLoginPage/User.actions";
import firebase from "../firebase";

export default function HomePageHeader() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");


    const dispatch = useDispatch();
    const error = useSelector((state) => state.user.error);

    const userLogin = () => {
        dispatch(authenticateUser(email, password));
    }

    const userRegister = () => {
        dispatch(registerUser(email, password, fname));
    }

    const onGoogleLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
    
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => {
            console.log("Success: ", result);
          })
          .catch((error) => {
            console.log("Error: ", error);
          });
      };
    
      const onFacebookLogin = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
    
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => {
            console.log("Success: ", result);
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log("Error: ", errorMessage);
    
          });
      };

    return (
        <header className={styles.headerNotLogged}>
            <div className={styles.navWrapper}>
                <nav className={styles.navNotLogged}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                    <a href="/" className={styles.logo}></a>
                    <div className={styles.formWrapper}>
                        <div className={styles.formBox}>
                            <Form.Control type="email" placeholder="Enter email" value={email} onInput={(ev) => setEmail(ev.target.value)} />
                        </div>
                        <div className={styles.formBox}>
                            <Form.Control type="password" placeholder="Password" value={password} onInput={(ev) => setPassword(ev.target.value)} />
                        </div>
                        {error && <p className={styles.errorContainer}>{error}</p>}
                        <Button variant="dark" className={`${styles.button} ${styles.buttonDark}`} onClick={userLogin}>Sign in</Button>
                    </div>
                </nav>
            </div>
            {/* banner */}
            <div className={styles.wrapper}>
                <div className={styles.newAccountWrapper}>
                    <h2>New here? Create a free account!</h2>
                    <form>
                        <input aria-label="Name" placeholder="Name" maxLength="50" size="50" type="text" id="user_first_name" value={fname} onInput={(ev) => setFname(ev.target.value)}></input>
                        <input aria-label="Email address" placeholder="Email address" type="email" id="user_email" value={email} onInput={(ev) => setEmail(ev.target.value)}></input>
                        <input id="user_password_signup" aria-label="Password" placeholder="Password" maxLength="128" size="128" type="password" value={password} onInput={(ev) => setPassword(ev.target.value)}></input>
                        <div className={styles.signUpWrapper}>
                            <Button variant="dark" className={`button button-dark ${styles.signUpBtn}`} onClick={userRegister}>Sign up</Button>
                            <p>By clicking “Sign up” I agree to the Goodreads Terms of Service and confirm that I am at least 13 years old.</p>
                        </div>
                        <div className={styles.thirdPartyLogin}>
                            <span className={styles.message}>or sign in by using</span>
                            <span className={styles.facebookLogin} onClick={onFacebookLogin}/>
                            <span className={styles.googleLogin} onClick={onGoogleLogin}/>
                        </div>
                    </form>
                </div>
            </div>
        </header>
    )
}