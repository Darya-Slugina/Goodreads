import styles from './Cookies.module.scss';
import { Link } from "react-router-dom";
import React, { useEffect } from 'react';

export default function Cookies() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className={styles.mainContentContainer}>
            <div className={styles.container}>
                <div className={styles.grRow}>
                    <div className={styles.grCol}>
                        <h1 className={styles.serif}>
                            Cookies Notice
                    </h1>
                    </div>
                </div>
                <div className={styles.grRow}>
                    <div className={styles.grCol8}>
                        <p>
                            <strong>
                                Last updated: June 30, 2020
                            </strong>
                        </p>
                        <p>
                            We use cookies, pixels, and other technologies (collectively, “cookies”) to recognize your browser or device, learn
                            more about your interests, and provide you with essential features and services and for additional purposes,
                            including:
                        </p><ul className={styles.paddingLeftMedium}>
                            <li className={styles.paddingBottomSmall}>
                                Recognizing you when you sign-in to use our services. This allows us to provide you with personalized content,
                                recognize you as a member, and provide other customized features and services.
                            </li>
                            <li className={styles.paddingBottomSmall}>
                                Keeping track of your specified preferences. This allows us to honor your preferences, such as whether or not
                                you would like to see interest-based ads. You may access or change your information and preferences at any time
                                in the account section of Goodreads.com once you have signed in with your personal password.
                            </li>
                            <li className={styles.paddingBottomSmall}>
                                Keeping track of services you interact with.
                            </li>
                            <li className={styles.paddingBottomSmall}>
                                Conducting research and diagnostics to improve our content, products, and services.
                            </li>
                            <li className={styles.paddingBottomSmall}>
                                Preventing fraudulent activity.
                            </li>
                            <li className={styles.paddingBottomSmall}>
                                Improving security.
                            </li>
                            <li className={styles.paddingBottomSmall}>
                                Delivering content, including ads, relevant to your interests on sites belonging to us and our affiliates and
                                third-party sites (see the Interest Based Ads notice for how we use cookies in serving interest-based ads).
                            </li>
                            <li className={styles.paddingBottomSmall}>
                                Reporting. This allows us to measure and analyze the performance of our services.
                            </li>
                        </ul>
                        <p></p>
                        <p>
                            Goodreads cookies allow you to take advantage of some of our essential features. If you block or otherwise reject
                            our cookies, you will not be able use any services that require you to sign in.
                        </p>
                        <p>
                            Approved third parties may also set cookies when you interact with our services. Third parties include search
                            engines, providers of measurement and analytics services, social media networks, and advertising companies.
                            Third parties use cookies in the process of delivering content, including ads relevant to your interests, to
                            measure the effectiveness of their ads, and to perform services on our behalf.
                        </p>
                        <p>
                            You can manage browser cookies through your browser settings. The ‘Help’ feature on most browsers will tell you
                            how to prevent your browser from accepting new cookies, how to have the browser notify you when you receive a
                            new cookie, how to block cookies, and when cookies will expire. If you block all cookies on your browser, neither
                            we nor third parties will transfer cookies to your browser. If you do this, however, you may have to manually
                            adjust some preferences every time you visit a site and some features and services may not work.
                        </p>
                        <p>
                            See our
                            <Link to="/privacy" className={styles.hyperlink}>&nbsp;Privacy Notice&nbsp;</Link>
                            for more information about the types of information we gather.
                        </p>
                    </div>
                    <div className={styles.grCol4}>
                        <h3 className={styles.grH3}>
                            Guidelines and Terms
                        </h3>
                        <ul className={styles.guidelinesSidebar}>
                            <li className={styles.unstyledListItem}>
                                <Link to="/terms" className={styles.hyperlink}>Terms of Use</Link>
                            </li>
                            <li className={styles.unstyledListItem}>
                                <Link to="/privacy" className={styles.hyperlink}>Privacy Policy</Link>
                            </li>
                            <li className={styles.unstyledListItem}>
                                <div className={styles.bold}> Cookies Notice </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}