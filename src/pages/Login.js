import {
  Container,
  MainTitle,
  FormWrapper,
  Inputs,
  Buttons,
} from "../styles/Styles";
import { Link } from "react-router-dom";
import React from "react";

export default function Login() {
  return (
    <Container>
      <MainTitle>MyWallet</MainTitle>
      <FormWrapper>
        <Inputs placeholder="E-mail"></Inputs>
        <Inputs placeholder="Senha"></Inputs>
        <Buttons>Entrar</Buttons>
      </FormWrapper>
      <Link to="/register">Primeira vez? Cadastre-se!</Link>
    </Container>
  );
}
