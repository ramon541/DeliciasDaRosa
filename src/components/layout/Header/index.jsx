import styles from "./styles.module.css";
import logo from "../../../assets/logo.png";

export default function Header({ children }) {
  return (
    <header className={`${styles.container}`}>
      <div className={styles.flexLinks}>
        <a href="">
          <img className={styles.img} src={logo} alt="Logo" />
        </a>
        <h4>Link 1</h4>
        <h4>Link 2</h4>
        <h4>Link 3</h4>
      </div>
      {children}
    </header>
  );
}
