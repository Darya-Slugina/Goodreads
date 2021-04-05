import styles from './Registration.module.scss';
import LoginFooter from "../Footer/LoginFooter"
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import firebase from "../firebase";
import { loginWithCredentials } from './service';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./User.actions";
import { authenticateUser, authenticateUserWithGoogle, authenticateUserWithFacebook } from "./User.actions"

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.user);

  useEffect(() => {
    console.log(user.id);
    if (user.id) {
      history.replace("/genres");
    }
  }, [history, user])

  const userLogin = () => {
    dispatch(authenticateUser(email, password));
  }

  const onGoogleLogin = () => {
    dispatch(authenticateUserWithGoogle());
  };

  const onFacebookLogin = () => {
    dispatch(authenticateUserWithFacebook());
  };


  return (
    <React.Fragment>
      <div className={styles.texture}>
        <div className={styles.clearfix}>
          <div>
            <Link to="/"><img src="https://s.gr-assets.com/assets/layout/goodreads_logo_324-a908b923dc3ed9b7a13f3da4d1ffb2df.png" alt="Goodreads: Book reviews, recommendations, and discussion" className={styles.logo} /></Link>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.mainContent}>
            <div className={styles.contentBox}>
              <h1 className={styles.contentBoxHeader}> Sign in to Goodreads</h1>

              <div className={styles.signUpOptions}>
                <button className={styles.buttonGoogle} onClick={onGoogleLogin}>  Continue with Google </button>
                <img src="https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/google.png?alt=media&token=910d202e-ebe5-40cf-9dbb-78d972f79f18" alt="google" className={styles.googleLogo} />
                <button className={styles.buttonFacebook} onClick={onFacebookLogin}>Continue with Facebook </button>
                <img src="https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/facebook.png?alt=media&token=b5f184e2-a78b-4926-bf1c-26ea2903a9bc" alt="facebook" className={styles.facebookIcon} />
              </div>

              <p className={styles.gradient}>
                <span className={styles.gradientText}>or</span>
              </p>

              <div className={styles.emailForm}>
                <div className={styles.fieldPara}>
                  <label className={styles.fieldParaLabel} for="user_email">Email address</label>
                  <input className={styles.fieldParaInput} spellCheck="false" placeholder="you@yours.com" autoFocus="autofocus" type="email" id="user_email" value={email} onInput={(ev) => setEmail(ev.target.value)} />
                </div>
                <div className={styles.fieldPara}>
                  <label className={styles.fieldParaLabel} for="user_password">Password</label>
                  <input className={styles.fieldParaInput} maxLength="128" size="128" type="password" id="user_password" value={password} onInput={(ev) => setPassword(ev.target.value)} />
                </div>
              </div>
              {error.loginError && <p className={styles.errorContainer}>{error.loginError}</p>}
              <div className={styles.submitPara}>
                <input className={styles.submitBtn} name="next" type="submit" value="Sign in" onClick={userLogin} />
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
