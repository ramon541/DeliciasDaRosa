import styles from "./styles.module.css";

export default function Footer() {
  return (
    <div className={`${styles.wrapper} ${styles.flexCenter} ${styles.bgWhite}`}>
      <img
        className={styles.img}
        width="100px"
        height="200px"
        src="./assets/logo.png"
        alt="Logo Delícias da Rosa"
      />
      <div className={styles.flexLinks}>
        <a href="https://wa.me/5534991100535" rel="noreferrer" target="_blank">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a href="https://www.instagram.com" rel="noreferrer" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com" rel="noreferrer" target="_blank">
          <i className="fa-brands fa-facebook"></i>
        </a>
      </div>
    </div>
  );
}
