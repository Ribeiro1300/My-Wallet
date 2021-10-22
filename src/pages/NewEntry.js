import {
  Buttons,
  Container,
  FormWrapper,
  Inputs,
  PageTitle,
} from "../styles/Styles";
import React from "react";
import styled from "styled-components";

export default function NewEntry() {
  return (
    <Container>
      <Wrapper>
        <PageTitle>Nova entrada</PageTitle>
        <FormWrapper>
          <Inputs placeholder="Valor"></Inputs>
          <Inputs placeholder="Descrição"></Inputs>
          <Buttons>Salvar entrada</Buttons>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h2{
    margin-left: 30px ;
    align-self: flex-start;
  }
`;
