import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header>
        <Link to="/login">
          <Button text="Login" />
        </Link>
      </Header>
      <h1>Hello, world!</h1>
      <h2>Here comes a nice content about bakery...</h2>
      <Footer />
    </div>
  );
}
