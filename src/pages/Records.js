import { NewRecord, Container, PageTitle } from "../styles/Styles";
import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";

export default function Records() {
  return (
    <Container>
      <TitleWrapper>
        <PageTitle>Olá, Fulano</PageTitle>
        <ion-icon name="exit-outline"></ion-icon>
      </TitleWrapper>

      <WhiteBoard>
        <h3>Não há registros de entrada ou saída</h3>
      </WhiteBoard>
      <ButtonsWrapper>
        <Link to="/newEntry">
          <NewRecord>Nova entrada</NewRecord>
        </Link>
        <Link to="/newWithdraw">
          <NewRecord>Nova saída</NewRecord>
        </Link>
      </ButtonsWrapper>
    </Container>
  );
}

const WhiteBoard = styled.div`
  width: 90%;
  height: 80%;
  background-color: white;
  border-radius: 8px;

  h3 {
    font-size: 20px;
    width: 200px;
    color: #868686;
    margin: 50% auto;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 8px 0px;

  a {
    margin: 0px;
    width: 45%;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;

  ion-icon {
    font-size: 30px;
  }
`;
