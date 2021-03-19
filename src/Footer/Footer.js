import styles from './Footer.module.css';
// import AboutUs from "./Footer/AboutUs";
// import { Route } from "react-router-dom";


export default function Footer() {
    return (
        <div className={styles.siteFooter}>
            <div className={styles.footerContents}>
                <div className={styles.contentRow}>
                    {/* <Route path="/terms">
                        <Terms />
                    </Route>
                    <Route path="/pravicy">
                        <Pravicy />
                    </Route> */}
                    {/* <Route path="/aboutUs">
                        <AboutUs />
                    </Route> */}

                </div>
            </div>
        </div>
    )
}