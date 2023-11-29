import styles from "./styles.module.css";

export default function Icon({ link, icon, blank }) {
  return (
    <a
      className={styles.hover}
      href={link}
      rel="noreferrer"
      target={blank ? "_self" : "_blank"}
    >
      <i className={icon}></i>
    </a>
  );
}
