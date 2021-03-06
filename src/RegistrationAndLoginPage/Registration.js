import styles from './Registration.module.scss';
import LoginFooter from "../Footer/LoginFooter"
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, registerUserWithGoogle, registerUserWithFacebook, fetchUserFailed } from "./User.actions"


export default function Registration() {

  const [fname, setFname] = useState("");
  const [validName, setValidName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.user);

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
      dispatch(registerUser(email, password, fname));
    }
  }

  const onGoogleLogin = () => {
    dispatch(registerUserWithGoogle());
  };

  const onFacebookLogin = () => {
    dispatch(registerUserWithFacebook());
  };

  useEffect(() => {
    if (user.id) {
      history.replace("/genres");
    }
  }, [history, user])


  return (
    <React.Fragment>
      <div className={styles.texture}>
        <div className={styles.clearfix}>
          <div>
            <Link to={"/"}><img src="https://s.gr-assets.com/assets/layout/goodreads_logo_324-a908b923dc3ed9b7a13f3da4d1ffb2df.png" alt="Goodreads: Book reviews, recommendations, and discussion" className={styles.logo} /></Link>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.mainContent}>
            <div className={styles.contentBox}>
              <h1 className={styles.contentBoxHeader}> Sign up for Goodreads</h1>
              <p className={styles.intro}>Sign up to see what your friends are reading, get book recommendations, and join the world???s largest community of readers.</p>
              <div className={styles.signUpOptions}>
                <button className={styles.buttonGoogle} onClick={onGoogleLogin}>  Continue with Google </button>
                <img src="https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/google.png?alt=media&token=910d202e-ebe5-40cf-9dbb-78d972f79f18" alt="google" className={styles.googleLogo} />
                <button className={styles.buttonFacebook} onClick={onFacebookLogin}>Continue with Facebook </button>
                <img src="https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/facebook.png?alt=media&token=b5f184e2-a78b-4926-bf1c-26ea2903a9bc" alt="facebook" className={styles.facebookIcon} />
              </div>

              <p className={styles.gradient}>
                <span className={styles.gradientText}>or</span>
              </p>

              <div className={styles.signup}>Sign Up with Email</div>

              <div className={styles.emailForm}>
                <div className={styles.fieldPara}>
                  <label className={styles.fieldParaLabel} htmlFor="user_first_name">Name</label>
                  <input className={styles.fieldParaInput} placeholder="Name" maxLength="50" size="50" type="text" name="user[first_name]" id="user_first_name" value={fname} onInput={(ev) => validateFname(ev.target.value)} />
                </div>
                <div className={styles.fieldPara}>
                  <label className={styles.fieldParaLabel} htmlFor="user_email">Email address</label>
                  <input className={styles.fieldParaInput} placeholder="you@yours.com" type="email" id="user_email" value={email} onInput={(ev) => setEmail(ev.target.value)} />
                </div>
                <div className={styles.fieldPara}>
                  <label className={styles.fieldParaLabel} htmlFor="user_password">Password</label>
                  <input className={styles.fieldParaInput} maxLength="128" size="128" type="password" id="user_password" value={password} onInput={(ev) => setPassword(ev.target.value)} />
                </div>
                {error && error.registerError && <p className={styles.errorContainer}>{error.registerError}</p>}
              </div>
              <div className={styles.submitPara}>
                <input className={styles.submitBtn} name="next" type="submit" value="Sign up" onClick={userRegister} />
                <div className={styles.signUpOption}>
                  <span>
                    Already a member?
                      <Link className={styles.signUpOptionA} to="/login">Sign in</Link>
                  </span>
                </div>
              </div>
              <p className={styles.privacyNotice}> By clicking ???Sign up??? I agree to the Goodreads &nbsp;
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