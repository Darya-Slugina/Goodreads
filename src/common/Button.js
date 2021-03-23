import styles from './Button.module.css';


export default function Button({ value, onClick }) {
  return <button className={styles.button} onClick={onClick}>{value}</button>;
}