import { useState } from "react";
import Button from "../../components/Button";
import styles from "./styles.module.css";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [togglePassword, setTogglePassword] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();

    console.log(login, password);
    setLogin("");
    setPassword("");
  }

  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input
          label="Login"
          placeholder="Informe o login..."
          value={login}
          setValue={setLogin}
          required
        >
          <i className="fa-solid fa-user"></i>
        </Input>
        <Input
          label="Senha"
          placeholder="Informe a senha..."
          value={password}
          type={togglePassword ? "password" : "text"}
          setValue={setPassword}
          required
        >
          <i
            style={{ cursor: "pointer" }}
            onClick={() => setTogglePassword(!togglePassword)}
            className={
              togglePassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
            }
          ></i>
        </Input>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button color="cyan" type="submit" text="Login" />
          <Link to="/">
            <small
              style={{ color: "var(--cyan)", textDecoration: "underline" }}
            >
              Voltar
            </small>
          </Link>
        </div>
      </form>
    </div>
  );
}
