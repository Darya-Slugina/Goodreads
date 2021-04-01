import Button from 'react-bootstrap/Button'
import styles from './Header.module.scss'

export default function PersonalNavGuest() {
    return (
        <nav className={styles.personalNav}>
            <Button className={styles.navLoggedBtn}>Sign In</Button>
            <Button className={styles.navLoggedBtn}>Join</Button>
        </nav>
    )
}