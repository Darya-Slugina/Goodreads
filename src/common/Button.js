import styles from './Button.module.css';


// console.log(styles);

export default function Button({ value, onClick }) {
  return <button className={styles.button} onClick={onClick}>{value}</button>;
}
