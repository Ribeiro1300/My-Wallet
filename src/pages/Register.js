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

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const history = useHistory();

  async function registerUser(event) {
    event.preventDefault();
    try {
      const body = { name: name, email: email, password: password };

      if (password != checkPassword) return alert("Senhas diferentes");

      const result = await axios.post(
        process.env.REACT_APP_BASE_URL + "/users",
        body
      );
      if (result.status == 201) {
        alert("Usuário cadastrado com sucesso");
        history.push("/");
      }
    } catch (error) {
      if (error.request.status == 409) {
        alert("Email já cadastrado");
      }
    }
  }

  return (
    <Container>
      <MainTitle>MyWallet</MainTitle>
      <FormWrapper onSubmit={registerUser}>
        <Inputs
          onChange={(elem) => setName(elem.target.value)}
          required
          type="text"
          placeholder="Nome"
          value={name}
        ></Inputs>
        <Inputs
          onChange={(elem) => setEmail(elem.target.value)}
          required
          type="email"
          placeholder="E-mail"
          value={email}
        ></Inputs>
        <Inputs
          onChange={(elem) => setPassword(elem.target.value)}
          required
          type="password"
          placeholder="Senha"
          value={password}
        ></Inputs>
        <Inputs
          onChange={(elem) => setCheckPassword(elem.target.value)}
          required
          type="password"
          placeholder="Confirme a senha"
          value={checkPassword}
        ></Inputs>
        <Buttons type="submit">Cadastrar</Buttons>
      </FormWrapper>
      <Link to="/">Já tem uma conta? Entre agora!</Link>
    </Container>
  );
}
