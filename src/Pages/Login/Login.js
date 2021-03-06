import React, { useState } from "react";
import Container from "../../Conponents/Container";
import { useLogin } from "../../hooks/useLogin";
import styles from "./login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, err, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} className={styles["login-form"]}>
        <h2>Login</h2>
        <label>
          <span>email:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {!isPending && <Button type="submit" name="Login" />}
        {isPending && <Button type="submit" disabled name="Loading..." />}
        {err && <p>{err}</p>}
      </form>
    </Container>
  );
};

export default Login;

export const Button = ({ type, disabled, name }) => {
  return (
    <button type={type} disabled={disabled} className="btn">
      {name}
    </button>
  );
};
