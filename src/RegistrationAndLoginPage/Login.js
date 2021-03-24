import styles from './Registration.module.scss';
import LoginFooter from "../Footer/LoginFooter"
import React from 'react';
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <React.Fragment>
      <div className={styles.texture}>
        <div className={styles.clearfix}>
          <div>
            <img src="https://s.gr-assets.com/assets/layout/goodreads_logo_324-a908b923dc3ed9b7a13f3da4d1ffb2df.png" alt="Goodreads: Book reviews, recommendations, and discussion" className={styles.logo} />
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.mainContent}>
            <div className={styles.contentBox}>
              <h1 className={styles.contentBoxHeader}> Sign in to Goodreads</h1>
              <div className={styles.emailForm}>
                <div className={styles.fieldPara}>
                  <label className={styles.fieldParaLabel} for="user_email">Email address</label>
                  <input className={styles.fieldParaInput} spellCheck="false" placeholder="you@yours.com" autoFocus="autofocus" type="email" name="user[email]" id="user_email" />
                </div>
                <div className={styles.fieldPara}>
                  <label className={styles.fieldParaLabel} for="user_password">Password</label>
                  <input className={styles.fieldParaInput} maxLength="128" size="128" type="password" name="user[password]" id="user_password" />
                </div>
              </div>
              <div className={styles.submitPara}>
                <input className={styles.submitBtn} name="next" type="submit" value="Sign in" />
                <div className={styles.signUpOption}>
                  <span>
                    Not a member?
                      <Link className={styles.signUpOptionA} to="/registration">Sign up</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoginFooter />
    </React.Fragment>
  );
}