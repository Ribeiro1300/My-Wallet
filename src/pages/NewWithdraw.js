import {
  Buttons,
  Container,
  FormWrapper,
  Inputs,
  PageTitle,
} from "../styles/Styles";
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import dayjs from "dayjs";
import { useHistory } from "react-router-dom";

export default function NewWithdraw() {
  const [value, setValue] = useState("");
  const [desc, setDesc] = useState("");
  const history = useHistory();

  async function sendWithdraw(event) {
    event.preventDefault();
    if (!localStorage.getItem("token")) {
      alert("Faça login!");
      history.push("/");
    }

    const body = {
      description: desc,
      date: dayjs().format("DD/MM"),
      type: "withdraw",
      value: -value,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const result = await axios.post(
      "https://my-wallet-projeto14.herokuapp.com/records",
      body,
      config
    );
    console.log(result);
    history.push("/records");
  }

  return (
    <Container>
      <Wrapper>
        <PageTitle>Nova saída</PageTitle>
        <FormWrapper onSubmit={sendWithdraw}>
          <Inputs
            onChange={(elem) => setValue(elem.target.value)}
            type="number"
            placeholder="Valor"
            value={value}
            required
          ></Inputs>
          <Inputs
            onChange={(elem) => setDesc(elem.target.value)}
            type="text"
            placeholder="Descrição"
            value={desc}
            required
          ></Inputs>
          <Buttons type="submit">Salvar saída</Buttons>
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

  h2 {
    margin-left: 30px;
    align-self: flex-start;
  }
`;
