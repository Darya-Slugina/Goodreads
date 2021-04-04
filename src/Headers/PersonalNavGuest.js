import Button from 'react-bootstrap/Button'
import styles from './Header.module.scss'
import { useHistory } from "react-router-dom";

export default function PersonalNavGuest() {
    const history = useHistory();

    const goToLoginPage = () =>{
        history.push('/login')
    }

    const goToRegisterPage = () => {
        history.push('/registration')
    }

    return (
        <nav className={styles.personalNav}>
            <Button variant='light' className={styles.navLoggedBtn} onClick={goToLoginPage}>Sign In</Button>
            <Button variant='light' className={styles.navLoggedBtn} onClick={goToRegisterPage}>Join</Button>
        </nav>
    )
}