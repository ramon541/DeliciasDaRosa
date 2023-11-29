import styles from "./styles.module.css";

export default function Button({ text, ...props }) {
  return (
    <button {...props} className={`${styles.container}`}>
      <strong>{text}</strong>
    </button>
  );
}
