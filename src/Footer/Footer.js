import styles from './Footer.module.css';
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <footer className={styles.siteFooter}>
            <div className={styles.footerContents}>
                <div className={styles.contentRow}>
                    <div className={styles.col6}>
                        <div className={styles.contentRow}>
                            <div className={styles.col3}>
                                <h3 className={styles.heading}>Company</h3>
                                <ul className={styles.linkList}>
                                    <li className={styles.linkListItem}>
                                        <Link to="/aboutUs" className={styles.link}>About us</Link>
                                    </li>
                                    <li className={styles.linkListItem}>
                                        <Link to="/terms" className={styles.link}>Terms</Link>
                                    </li>
                                    <li className={styles.linkListItem}>
                                        <Link to="/privacy" className={styles.link}>Privacy</Link>
                                    </li>
                                    <li className={styles.linkListItem}>
                                        <Link to="/adprefs" className={styles.link}>Ad Preferences</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.col3}>
                                <h3 className={styles.heading}>Connect</h3>
                                <div className={styles.socialLinkWrapper}>
                                    <a className={styles.socialLink} href="https://www.facebook.com/Goodreads/">
                                        <img alt="Goodreads on Facebook" src="https://s.gr-assets.com/assets/site_footer/footer_facebook-ea4ab848f8e86c5f5c98311bc9495a1b.svg" />
                                    </a>
                                    <a className={styles.socialLink} href="https://twitter.com/goodreads">
                                        <img alt="Goodreads on Twitter" src="https://s.gr-assets.com/assets/site_footer/footer_twitter-126b3ee80481a763f7fccb06ca03053c.svg" />
                                    </a>
                                </div>
                                <div className={styles.socialLinkWrapper}>
                                    <a className={styles.socialLink} href="https://www.instagram.com/goodreads/">
                                        <img alt="Goodreads on Instagram" src="https://s.gr-assets.com/assets/site_footer/footer_instagram-d59e3887020f12bcdb12e6c539579d85.svg" />
                                    </a>
                                    <a className={styles.socialLink} href="https://www.linkedin.com/company/goodreads-com/">
                                        <img alt="Goodreads on LinkedIn" src="https://s.gr-assets.com/assets/site_footer/footer_linkedin-5b820f4703eff965672594ef4d10e33c.svg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.col4}>
                        <div className={styles.appLinksColumnContents}>
                            <div className={styles.appLinksColumnBadges}>
                                <a href="https://itunes.apple.com/app/apple-store/id355833469?pt=325668&amp;ct=mw_footer&amp;mt=8">
                                    <img alt="Download app for iOS" src="https://s.gr-assets.com/assets/app/badge-ios-desktop-homepage-6ac7ae16eabce57f6c855361656a7540.svg" />
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.goodreads&amp;utm_source=mw_footer&amp;pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                                    <img alt="Download app for Android" srcset="https://s.gr-assets.com/assets/app/badge-android-desktop-home-2x-e31514e1fb4dddecf9293aa526a64cfe.png 2x" src="https://s.gr-assets.com/assets/app/badge-android-desktop-home-0f517cbae4d56c88a128d27a7bea1118.png" />
                                </a>
                            </div>
                            <div className={styles.linkList}>
                                    ©
                                    2021
                                    Goodreads, Inc.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}