import styles from "./styles.module.css";
import product from "./product.jpg";

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Produto</h3>
      </div>
      <div className={styles.description}>
        <p>
          <strong>Descrição: </strong>Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Fuga, itaque.
        </p>
        <p>
          <strong>Preço: </strong> R$ 9,99/kg
        </p>
      </div>
    </div>
  );
}
