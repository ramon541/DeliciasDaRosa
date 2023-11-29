import styles from "./styles.module.css";
import logo from "../../../assets/logo.png";

import Icon from "../../Icon";

export default function Footer() {
  return (
    <footer className={`${styles.container}`}>
      <a href="">
        <img className={styles.img} src={logo} alt="Logo" />
      </a>
      <div className={styles.flexLinks}>
        <Icon
          link="https://wa.me/5534991100535"
          icon="fa-brands fa-whatsapp fa-lg"
        />
        <Icon
          link="https://www.instagram.com"
          icon="fa-brands fa-instagram fa-lg"
        />
        <Icon
          link="https://www.facebook.com"
          icon="fa-brands fa-facebook fa-lg"
        />
      </div>
    </footer>
  );
}
