import styles from './Privacy.module.scss';
import { Link } from "react-router-dom";
import React, { useEffect } from 'react';


export default function Privacy() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className={styles.mainContentContainer}>
            <div className={styles.container}>
                <div className={styles.grRow}>
                    <h1 className={styles.serif}>
                        Privacy Policy
                    </h1>
                </div>
                <div className={styles.grRow}>
                    <div className={styles.grCol8}>
                        <p>
                            <strong>Last updated: June 30, 2020. </strong>
                        </p>
                        <p>
                            Goodreads LLC (together with its affiliates, “Goodreads,” “we,” or “us”) knows that you care how information about
                            you is used and shared, and we appreciate your trust that we will do so carefully and sensibly.
                    </p>
                        <p>
                            Goodreads LLC is a subsidiary of Amazon.com, Inc. (“Amazon”). The information we collect is subject to the
                        <a className={styles.hyperlink} href="https://www.amazon.com/gp/help/customer/display.html?nodeId=201909010">&nbsp;Amazon Privacy Notice&nbsp;</a>,
                        except as otherwise stated in this notice.  By visiting or using Goodreads.com and related services (the “Service”),
                        you are accepting the practices described in the Amazon Privacy Notice as supplemented by this notice
                        (the “Privacy Notice”). Please note that, if you have an account on www.amazon.com, information gathered by
                        Goodreads may be correlated with any personal information that Amazon.com has and used by Goodreads and Amazon
                        to improve the services we offer
                    </p>
                        <h2 className={styles.subTitle}> User Content and Messages</h2>
                        <p>
                            The Service allows you to post User Content, as defined in our
                        <Link to="/terms" className={styles.hyperlink}>&nbsp;Terms of Use&nbsp;</Link>.
                        Any User Content you post becomes available to the public via the Service. User Content includes, but is not
                        limited to, reviews, comments, and visual content. If you remove User Content, copies may remain viewable in
                        cached and archived pages or if other users have copied or stored your User Content.
                    </p>
                        <p>
                            Goodreads takes reasonable measures to keep messages that you send to other Members through the Service private
                            between you and the recipient. However, even if you have deleted the message from your Goodreads inbox or outbox,
                            copies of the message may remain viewable in cached and archived pages or if other users have copied or stored the
                            message.
                    </p>
                        <h2 className={styles.subTitle}> E-mail</h2>
                        <p>
                            By providing Goodreads your e-mail address you consent to us sending you Service-related notices, including any
                            notices required by law, in lieu of communication by postal mail. We may also use your e-mail address to send you
                            other messages, such as newsletters, changes to features, notices of member-initiated content, or special offers
                            (“Other Messages”). If you do not want to receive Other Messages, you may opt out by changing your e-mail
                            preference settings in the account settings section of Goodreads.com after you have signed in using your
                            personal password. Opting out may prevent you from receiving e-mail messages regarding updates, improvements, or
                            offers. You may not opt out of Service-related e-mails.
                    </p>
                        <h2 className={styles.subTitle}> Privacy Settings </h2>
                        <p>
                            Your name is used when you invite another person to join Goodreads, or when you request to add another member to
                            your friends list.  To the extent that you do not wish to have your name shared in this manner, you should not
                            make use of these services.  You can modify, delete, and set your privacy setting for information you provide us
                            any time in the account settings section of Goodreads.com after you have signed in using your personal password.
                    </p>
                        <h2 className={styles.subTitle}> Your Choices About Your Information</h2>
                        <p>
                            You may access or change your information and preferences at any time in the account settings section of
                            Goodreads.com once you have signed in with your personal password. For example, you can control which actions,
                            if any, will appear on your update feed, whether to display your e-mail address, whether to display your last
                            name, and what sort of e-mail notifications you will receive from the Service. You may, of course, decline to
                            submit personally identifiable information through Goodreads, in which case Goodreads may not be able to provide
                            certain services to you.
                    </p>
                        <h2 className={styles.subTitle}> Cookies and Other Identifiers</h2>
                        <p>
                            To enable our systems to recognize your browser or device and to provide and improve the Service, we use cookies
                            and other identifiers. For more information about cookies and how we use them, please read our
                        <Link to="/cookies" className={styles.hyperlink}>&nbsp;Cookies&nbsp;</Link>
                        notice.
                    </p>
                        <h2 className={styles.subTitle}> Advertising</h2>
                        <p>
                            We use your personal information to display interest-based ads for features, products, and services that might be of
                            interest to you. We do not use information that personally identifies you to display interest-based ads. To learn
                            more, please read our Interest Based Ads.
                        notice.
                    </p>
                        <h2 className={styles.subTitle}> Children's Privacy</h2>
                        <p>
                            Protecting the privacy of young children is especially important. For that reason, Goodreads does not knowingly
                            collect or solicit personal information from anyone under the age of 13 or knowingly allow such persons to register.
                            If you are under 13, please do not send any information about yourself to us, including your name, address,
                            telephone number, or e-mail address. No one under age 13 is allowed to provide any personal information to or on
                            Goodreads. In the event that we learn that we have collected personal information from a child under age 13 without
                            verification of parental consent, we will delete that information as quickly as possible. If you believe that we
                            might have any information from or about a child under 13, please
                        <a className={styles.hyperlink} href="/about/contact_us">&nbsp;contact us&nbsp;</a>.
                    </p>
                        <h2 className={styles.subTitle}>  California Consumer Privacy Act</h2>
                        <p>
                            Click to read additional disclosures required under the California Consumer Privacy Act.
                    </p>
                        <h2 className={styles.subTitle}> Changes to Our Privacy Policy</h2>
                        <p>
                            If we change this Privacy Notice, we will post those changes on our website to keep you aware of what information we
                            collect, how we use it and under what circumstances we may disclose it. Changes to this Privacy Notice are effective
                            when they are posted on this page.
                    </p>
                        <p>
                            If you have any questions about this Privacy Notice, the practices of this site, or your dealings with this Web site,
                            please contact us, or send mail to:
                    </p>
                        <p>
                            Goodreads, Inc
                        <br />
                        188 Spear Street , Suite 250
                        <br />
                        San Francisco ,CA 94105
                    </p>
                        <h3 className={styles.updates}>Updates</h3>
                        <p>
                            June 30, 2020:  We replaced our
                        <Link to="/privacy" className={styles.hyperlink}>&nbsp;former privacy policy&nbsp;</Link>
                        with a new one.  Please read this Privacy Policy carefully.
                    </p>
                        <p>
                            October 16, 2008:  We replaced our
                        <Link to="/privacy" className={styles.hyperlink}>&nbsp;former privacy policy&nbsp;</Link>
                        with a new one.  Please read this Privacy Policy carefully.
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
                                <div className={styles.bold}>Privacy Policy</div>
                            </li>
                            <li className={styles.unstyledListItem}>
                                <Link to="/cookies" className={styles.hyperlink}>Cookies Notice</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}