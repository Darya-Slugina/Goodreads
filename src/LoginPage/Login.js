import styles from './Login.module.css';

export default function Login() {
  return (
    <div className={styles.texture}>
      <div className={styles.clearfix}>
        <div>
          <img src="https://s.gr-assets.com/assets/layout/goodreads_logo_324-a908b923dc3ed9b7a13f3da4d1ffb2df.png" alt="Goodreads: Book reviews, recommendations, and discussion" className={styles.logo} />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.mainContent}>
          <div className={styles.contentBox}>
            <h1> Sign in to Goodreads</h1>
            <div className={styles.emailForm}>
              <div className={styles.fieldPara}>
                <label for="user_email">Email address</label>
                <input spellCheck="false" placeholder="you@yours.com" autoFocus="autofocus" type="email" name="user[email]" id="user_email" />
              </div>
              <div className={styles.fieldPara}>
                <label for="user_password">Password</label>
                <input maxLength="128" size="128" type="password" name="user[password]" id="user_password" />
              </div>
            </div>
            <div className={styles.submitPara}>
              <input className={styles.submitBtn} name="next" type="submit" value="Sign in" />
              <div className={styles.signUpOption}>
                <span>
                  Not a member?
                      <a href="/registration">Sign up</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tfooter}>
        <div className={styles.footer}>
          ©
          2021
          Goodreads Inc
        </div>
      </div>
    </div>
  );
}