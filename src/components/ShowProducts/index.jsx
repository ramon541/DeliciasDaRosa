import Card from "../Card";
import styles from "./styles.module.css";

export default function ShowProducts() {
  return (
    <div className={styles.container}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Conheça os nossos produtos!
      </h1>
      <div className={styles.productsContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
