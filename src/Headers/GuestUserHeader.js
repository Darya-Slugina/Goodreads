import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function GuestUserHeader(){
    return (
        <header className="header-notLogged">
                <div className="nav-wrapper">
                    <nav className="nav-notLogged">
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                        <a href="/" className="logo"></a>
                        <div className="form-wrapper">
                            <div className="form-box">
                                <Form.Control type="email" placeholder="Enter email" />
                                <div className="remember-me-wrapper">
                                    <input type="checkbox" defaultChecked id="remember-me" />
                                    <label htmlFor="remember-me">Remember me</label>
                                </div>
                            </div>
                            <div className="form-box">
                                <input type="password" placeholder="Password" />
                            </div>
                            <Button variant="dark" className="button button-dark">Sign in</Button>
                        </div>
                    </nav>
                </div>
                <div className='wrapper'>
                    <div className="new-account-wrapper">
                        <h2>New here? Create a free account!</h2>
                        <form>
                            <input aria-label="Name" placeholder="Name" maxLength="50" size="50" type="text" id="user_first_name"></input>
                            <input aria-label="Email address" placeholder="Email address" type="email" id="user_email"></input>
                            <input id="user_password_signup" aria-label="Password" placeholder="Password" maxLength="128" size="128" type="password" ></input>
                            <div className="sign-up-wrapper">
                                <Button variant="dark" className="button button-dark" id="sign-up-btn">Sign up</Button>
                                <p>By clicking “Sign up” I agree to the Goodreads Terms of Service and confirm that I am at least 13 years old.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </header>
    )
}