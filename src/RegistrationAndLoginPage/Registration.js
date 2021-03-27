import styles from './Registration.module.scss';
import LoginFooter from "../Footer/LoginFooter"
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import firebase from "../firebase";
import { registerWithCredentials } from './service';
import { useHistory } from "react-router-dom";
import { database } from "../firebase";


export default function Registration() {

  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
 

  const history = useHistory();


  const onRegister = () => {
    registerWithCredentials(email, password)
      .then((userCredential) => {
        const user = userCredential.user.uid;
        
        database
        .collection("users")
        .doc(user)
        .set({
          id: user,
          fname: fname,
          email: email,
        })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });

        history.push("/");
      })
      .catch((error) => {
        console.log("Error: ", error);
        setError(error.message);
      });
  };

  const onGoogleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log("Success: ", result);

        const user = firebase.auth().currentUser;

        database
        .collection("users")
        .doc(user.uid)
        .set({
          id: user.uid,
          fname: user.displayName,
          email: user.email,
        })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });

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
        const user = result.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("Error: ", errorMessage);

      });
  };


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
                  <label className={styles.fieldParaLabel} for="user_first_name">Name</label>
                  <input className={styles.fieldParaInput} placeholder="Name" maxLength="50" size="50" type="text" name="user[first_name]" id="user_first_name" value={fname} onInput={(ev) => setFname(ev.target.value)}/>
                </div>
                <div className={styles.fieldPara}>
                  <label className={styles.fieldParaLabel} for="user_email">Email address</label>
                  <input className={styles.fieldParaInput} placeholder="you@yours.com" type="email" id="user_email" value={email} onInput={(ev) => setEmail(ev.target.value)} />
                </div>
                <div className={styles.fieldPara}>
                  <label className={styles.fieldParaLabel} for="user_password">Password</label>
                  <input className={styles.fieldParaInput} maxLength="128" size="128" type="password" id="user_password" value={password} onInput={(ev) => setPassword(ev.target.value)} />
                </div>
                {error && <p className={styles.errorContainer}>{error}</p>}
              </div>
              <div className={styles.submitPara}>
                <input className={styles.submitBtn} name="next" type="submit" value="Sign up" onClick={onRegister} />
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