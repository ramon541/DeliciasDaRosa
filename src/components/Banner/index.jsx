import styles from "./styles.module.css";
import logo from "../../assets/logo.png";

export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img className={styles.imgLogo} src={logo} alt="" />
        <h2>Criando doces momentos!</h2>
      </div>
    </div>
  );
}
