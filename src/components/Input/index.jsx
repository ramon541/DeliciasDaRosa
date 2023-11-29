import styles from "./styles.module.css";

export default function Input({
  label,
  placeholder,
  value,
  setValue,
  type,
  children,
  ...props
}) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor="">
        <small>{label}</small>
      </label>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type={type}
          placeholder={placeholder}
          {...props}
        />
        {children && <div className={styles.icon}>{children}</div>}
      </div>
    </div>
  );
}
