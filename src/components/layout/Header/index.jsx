import styles from "./styles.module.css";

export default function Header() {
  return (
    <div
      className={`${styles.wrapper} ${styles.flex} ${styles.bgWhite} ${styles.dropShadow}`}
    >
      <img src="./assets/logo.png" alt="Logo" width="100px" height="auto" />
      <div className={styles.flexLinks}>
        <h4>Link 1</h4>
        <h4>Link 2</h4>
        <h4>Link 3</h4>
      </div>
    </div>
  );
}
