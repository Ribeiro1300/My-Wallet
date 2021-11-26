/* eslint-disable react/prop-types */
import { NewRecord, Container, PageTitle } from "../styles/Styles";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Records() {
  const [data, setData] = useState(undefined);
  const history = useHistory();

  useEffect(async () => {
    if (!localStorage.getItem("token")) {
      alert("Faça login!");
      history.push("/");
    }
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const result = await axios.get(
      process.env.REACT_APP_BASE_URL + "/records",
      config
    );
    setData(result.data);
  }, []);

  async function logout() {
    try {
      const body = {
        token: localStorage.getItem("token"),
      };
      const result = await axios.post(
        process.env.REACT_APP_BASE_URL + "/deleteSession",
        body
      );
      if (result.status == 201) {
        alert("Logout feito com sucesso");
      }
    } catch (error) {
      if (error.request.status == 409) {
        alert("Falha ao fazer logout");
      }
    }
    localStorage.removeItem("token");
    history.push("/");
  }
  return (
    <Container>
      <TitleWrapper>
        <PageTitle>Olá, {data ? data.name : null}</PageTitle>
        <ion-icon onClick={logout} name="exit-outline"></ion-icon>
      </TitleWrapper>

      <WhiteBoard>
        {!data ? (
          <h3>Não há registros de entrada ou saída</h3>
        ) : (
          <BoardContent key="1" data={data.records} />
        )}
      </WhiteBoard>
      <ButtonsWrapper>
        <Link to="/newEntry">
          <NewRecord>
            <ion-icon name="add-circle-outline"></ion-icon>
            <p>Nova entrada</p>
          </NewRecord>
        </Link>
        <Link to="/newWithdraw">
          <NewRecord>
            <ion-icon name="remove-circle-outline"></ion-icon>
            <p>Nova saída</p>
          </NewRecord>
        </Link>
      </ButtonsWrapper>
    </Container>
  );
}

function BoardContent({ data }) {
  let sum = 0;
  data.map((info) => {
    sum += info.value;
  });
  return (
    <BoardWrapper>
      {data.map((info) => (
        <>
          <AllRecords key={info.id} info={info} />
        </>
      ))}
      <h2>SALDO</h2>
      <h4>{sum.toFixed(2)}</h4>
    </BoardWrapper>
  );
}

function AllRecords(props) {
  return (
    <List>
      <div>
        <Date>{props.info.date}</Date>
        <Title>{props.info.description}</Title>
      </div>

      <Value type={props.info.type}>{props.info.value.toFixed(2)}</Value>
    </List>
  );
}

const WhiteBoard = styled.div`
  width: 90%;
  height: 80%;
  background-color: white;
  border-radius: 8px;
  position: relative;

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
    width: 47%;
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

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-weight: 900;
    color: black;
    position: absolute;
    bottom: 10px;
    left: 10px;
  }

  h4 {
    color: green;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

const List = styled.div`
  padding: 5px;
  color: black;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
  }
`;

const Value = styled.p`
  margin: 8px;
  color: ${(props) => (props.type === "entry" ? "green" : "red")};
`;

const Date = styled.p`
  margin: 8px;
  color: #868686;
`;

const Title = styled.p`
  margin: 8px;
`;
