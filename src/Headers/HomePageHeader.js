import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styles from './HomePageHeader.module.scss'

export default function HomePageHeader() {
    return (
        <header className={styles.headerNotLogged}>
            <div className={styles.navWrapper}>
                <nav className={styles.navNotLogged}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                    <a href="/" className={styles.logo}></a>
                    <div className={styles.formWrapper}>
                        <div className={styles.formBox}>
                            <Form.Control type="email" placeholder="Enter email" />
                            <div className="remember-me-wrapper">
                                <input type="checkbox" defaultChecked className={styles.rememberMe} />
                                <label htmlFor="remember-me">Remember me</label>
                            </div>
                        </div>
                        <div className={styles.formBox}>
                            <input type="password" placeholder="Password" />
                        </div>
                        <Button variant="dark" className={`${styles.button} ${styles.buttonDark}`}>Sign in</Button>
                    </div>
                </nav>
            </div>
            {/* banner */}
            <div className={styles.wrapper}>
                <div className={styles.newAccountWrapper}>
                    <h2>New here? Create a free account!</h2>
                    <form>
                        <input aria-label="Name" placeholder="Name" maxLength="50" size="50" type="text" id="user_first_name"></input>
                        <input aria-label="Email address" placeholder="Email address" type="email" id="user_email"></input>
                        <input id="user_password_signup" aria-label="Password" placeholder="Password" maxLength="128" size="128" type="password" ></input>
                        <div className={styles.signUpWrapper}>
                            <Button variant="dark" className={`button button-dark ${styles.signUpBtn}`}>Sign up</Button>
                            <p>By clicking “Sign up” I agree to the Goodreads Terms of Service and confirm that I am at least 13 years old.</p>
                        </div>
                    </form>
                </div>
            </div>
        </header>
    )
}