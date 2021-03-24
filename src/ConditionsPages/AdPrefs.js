import styles from './AdPrefs.module.scss';
import { Link } from "react-router-dom";

export default function AdPrefs() {
    return (
        <div className={styles.mainContentContainer}>
            <div className={styles.container}>
                <div className={styles.grRow}>
                    <h1 className={styles.serif}>
                        Ad Preferences
                    </h1>
                </div>
                <div className={styles.grRow}>
                    <p className={styles.grRowtext}>
                        Interest-based ads are sometimes referred to as personalized or targeted ads. We show interest-based ads to
                        display features, products, and services that might be of interest to you. For more information see our
                            <a href="/privacy">&nbsp;Interest Based Ads Notice</a>.
                        </p>
                    <h2 className={styles.grRowH2}>
                        Submit your preference
                        </h2>
                    <div>
                        <label className={styles.radioButton}>
                            <input className={styles.radioButtonInput} type="radio" name="user[allow_behavioral_ads]" checked="checked" id="adprefs" />
                            <label for="adprefs">Show me interest-based ads provided by Goodreads</label>
                        </label>
                        <label className={styles.radioButton}>
                            <input className={styles.radioButtonInput} type="radio" name="user[allow_behavioral_ads]"  id="adprefs1"/>
                            <label for="adprefs1">Do not show me interest-based ads provided by Goodreads</label>
                        </label>
                        <input type="submit" name="commit" value="Submit" className={styles.grButton} />
                    </div>
                    <p className={styles.marginTopLarge}>
                        If you choose not to be shown interest-based ads above, we will no longer show interest-based ads to you. Even if
                            you choose not to see interest-based ads, you may still see <a className={styles.link} href="/user/edit_fav_genres">&nbsp;personalized recommendations&nbsp;</a>
                            and other similar features on Goodreads. You may also see ads provided by Goodreads, they just will not be based
                            on your interests. For more general information, please see our <Link to="/privacy" className={styles.link}>&nbsp;Privacy Notice</Link>.
                        </p>
                    <p className={styles.marginTopMedium}>
                        Choosing not to see interest-based ads will not affect other services that use cookies and information may still
                        be collected for other purposes. You can manage cookies in the privacy settings of the web browser you are using.
                            Further details on how we use cookies and how you can manage cookies are contained in our <Link to="/cookies" className={styles.link}>&nbsp;Cookies Notice&nbsp;</Link>.
                        </p>
                    <p className={styles.marginTopMedium}>
                        We use cookies to manage your choice to not receive interest-based ads. If you delete these cookies or use a different
                        browser, you will have to choose not to receive interest-based ads again. Similarly, if your browser restricts or does
                        not support cookies, we may not be able to remember your choice not to see interest-based ads on that browser. To help
                        avoid having to repeat your choice you can login with your Goodreads account and make the selection above to enable us
                        to honor your choice whenever we recognize your Goodreads account.
                        </p>
                    <p className={styles.marginTopMedium}>
                        Goodreads also serves interest-based ads through third party ad networks.
                        You can generally opt out of receiving personalized ads from third party
                            advertisers and ad networks who are members of the <a className={styles.link} href="https://www.networkadvertising.org/choices/">&nbsp;Network Advertising Initiative (NAI)&nbsp;</a>
                            or who follow the <a className={styles.link} href="https://www.aboutads.info/choices/">&nbsp;Digital Advertising Alliance's Self-Regulatory Principles for Online Behavioral Advertising&nbsp;</a>
                            by visiting the opt out pages on the NAI website and DAA website.
                        </p>
                </div>
            </div>
        </div>
    )
}