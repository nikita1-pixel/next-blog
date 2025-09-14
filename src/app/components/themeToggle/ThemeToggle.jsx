import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
    return (
        <div className={styles.container}>
        <img src="/moon.png" width={14} height={14} />
        <div className={styles.ball}>  </div>
        <img src="/sun.png" width={14} height={14} />
        </div>
    )
}

export default ThemeToggle;
