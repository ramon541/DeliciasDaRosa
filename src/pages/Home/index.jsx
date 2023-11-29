import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Button from "../../components/Button";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Information from "../../components/Information";
import Banner from "../../components/Banner";
import ShowProducts from "../../components/ShowProducts";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header>
        <Link to="/login">
          <Button text="Login" />
        </Link>
      </Header>
      <Banner />
      <div className={styles.content}>
        <ShowProducts />
        <hr style={{ margin: "1rem 0rem" }} />
        <Information />
      </div>
      <Footer />
    </div>
  );
}
