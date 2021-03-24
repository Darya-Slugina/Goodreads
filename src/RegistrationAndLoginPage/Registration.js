import styles from './Registration.module.scss';
import LoginFooter from "../Footer/LoginFooter"
import React from 'react';
import { Link } from "react-router-dom";

export default function Registration() {
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
              <h1 className={styles.contentBoxHeader}> Sign up for Goodreads</h1>
              <p className={styles.intro}>Sign up to see what your friends are reading, get book recommendations, and join the world’s largest community of readers.</p>
              <div className={styles.emailForm}>
                <div className={styles.fieldPara}>
                  <label className={styles.fieldParaLabel} for="user_first_name">Name</label>
                  <input className={styles.fieldParaInput} spellCheck="false" placeholder="Name" autoFocus="autofocus" maxLength="50" size="50" type="text" name="user[first_name]" id="user_first_name" />
                </div>
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
                <input className={styles.submitBtn} name="next" type="submit" value="Sign up" />
                <div className={styles.signUpOption}>
                  <span>
                    Already a member?
                      <Link className={styles.signUpOptionA} to="/login">Sign in</Link>
                  </span>
                </div>
              </div>
              <p className={styles.privacyNotice}> By clicking “Sign up” I agree to the Goodreads &nbsp;
                <Link to="/terms" className={styles.privacyNoticeLink}> Terms of Service</Link>
                &nbsp; and confirm that I am at least 13 years of age.
                  <Link to="/privacy" className={styles.privacyNoticeLink}> &nbsp; Read our Privacy Policy.</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <LoginFooter />
    </React.Fragment>
  );
}