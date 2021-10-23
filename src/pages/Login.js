import {
  Container,
  MainTitle,
  FormWrapper,
  Inputs,
  Buttons,
} from "../styles/Styles";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function userLogin(event) {
    
    event.preventDefault();

    try {
      const body = { email: email, password: password };

      const result = await axios.post("http://localhost:4000/userLogin", body);

      if (result.status == 201) {
        localStorage.setItem("token", result.data);
        history.push("/records");
      }
    } catch (error) {
      alert("usuário ou senha errados");
    }
  }

  return (
    <Container>
      <MainTitle>MyWallet</MainTitle>
      <FormWrapper onSubmit={userLogin}>
        <Inputs
          onChange={(elem) => setEmail(elem.target.value)}
          placeholder="E-mail"
          type="email"
          value={email}
          required
        ></Inputs>
        <Inputs
          onChange={(elem) => {
            setPassword(elem.target.value);
          }}
          placeholder="Senha"
          type="password"
          value={password}
          required
        ></Inputs>
        <Buttons>Entrar</Buttons>
      </FormWrapper>
      <Link to="/register">Primeira vez? Cadastre-se!</Link>
    </Container>
  );
}
