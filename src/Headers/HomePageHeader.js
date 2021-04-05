import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './HomePageHeader.module.scss';
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from 'react';
import { authenticateUser } from "../RegistrationAndLoginPage/User.actions";
import { registerUser, fetchUserFailed } from "../RegistrationAndLoginPage/User.actions";

export default function HomePageHeader() {

    const [emailFromLogin, setEmailFromLogin] = useState("");
    const [passwordFromLogin, setPasswordFromLogin] = useState("");
    const [emailFromReg, setEmailFromReg] = useState("");
    const [passwordFromReg, setPasswordFromReg] = useState("");
    const [fname, setFname] = useState("");
    const [validName, setValidName] = useState("");


    const dispatch = useDispatch();
    const error = useSelector((state) => state.user.error);

    const userLogin = () => {
        dispatch(authenticateUser(emailFromLogin, passwordFromLogin));
    }

    const validateFname = (name) => {
        const regEx = /[a-zA-Z]/gi;
        console.log(name.match(regEx));
        if (name.trim().length < 3 || !name.match(regEx)) {
          dispatch(fetchUserFailed({message:"invalid Name"}, "registerError"))
        } else {
          setValidName(name);
        }
        setFname(name);
      }

    const userRegister = () => {
        if(validName.length){
        dispatch(registerUser(emailFromReg, passwordFromReg, fname));
        }
    }


    return (
        <header className={styles.headerNotLogged}>
            <div className={styles.navWrapper}>
                <nav className={styles.navNotLogged}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                    <a href="/" className={styles.logo}></a>
                    <div className={styles.formWrapper}>
                        <div className={styles.formBox}>
                            <Form.Control type="email" placeholder="Enter email" value={emailFromLogin} onInput={(ev) => setEmailFromLogin(ev.target.value)} />
                        </div>
                        <div className={styles.formBox}>
                            <Form.Control type="password" placeholder="Password" value={passwordFromLogin} onInput={(ev) => setPasswordFromLogin(ev.target.value)} />
                        </div>
                        <Button variant="dark" className={`${styles.button} ${styles.buttonDark}`} onClick={userLogin}>Sign in</Button>
                    </div>
                </nav>
                {(error.loginError && !validName) && <p className={styles.errorLoginContainer}>{error.loginError}</p>}
            </div>
            {/* banner */}
            <div className={styles.wrapper}>
                <div className={styles.newAccountWrapper}>
                    <h2>New here? Create a free account!</h2>
                    <Form>
                        <Form.Control required aria-label="Name" placeholder="Name" maxLength="50" size="50" type="text" id="user_first_name" value={fname} onInput={(ev) => validateFname(ev.target.value)} />
                        <Form.Control required aria-label="Email address" placeholder="Email address" type="email" id="user_email" value={emailFromReg} onInput={(ev) => setEmailFromReg(ev.target.value)} />
                        <Form.Control required id="user_password_signup" aria-label="Password" placeholder="Password" maxLength="128" size="128" type="password" value={passwordFromReg} onInput={(ev) => setPasswordFromReg(ev.target.value)} />
                        {error.registerError && <p className={styles.errorRegisterContainer}>{error.registerError}</p>}
                        <div className={styles.signUpWrapper}>
                            <Button variant="dark" className={`button button-dark ${styles.signUpBtn}`} onClick={userRegister}>Sign up</Button>
                            <p>By clicking “Sign up” I agree to the Goodreads Terms of Service and confirm that I am at least 13 years old.</p>
                        </div>
                    </Form>
                </div>
            </div>
        </header>
    )
}