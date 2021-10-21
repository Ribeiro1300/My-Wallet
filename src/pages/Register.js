import {
  Container,
  MainTitle,
  FormWrapper,
  Inputs,
  Buttons,
} from "../styles/Styles";
import { Link } from "react-router-dom";
import React from "react";

export default function Register() {
  return (
    <Container>
      <MainTitle>MyWallet</MainTitle>
      <FormWrapper>
        <Inputs placeholder="Nome"></Inputs>
        <Inputs placeholder="E-mail"></Inputs>
        <Inputs placeholder="Senha"></Inputs>
        <Inputs placeholder="Confirme a senha"></Inputs>
        <Buttons>Cadastrar</Buttons>
      </FormWrapper>
      <Link to="/">Já tem uma conta? Entre agora!</Link>
    </Container>
  );
}
