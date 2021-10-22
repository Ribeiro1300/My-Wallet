import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #8c11be;
  color: white;
  font-family: "Raleway", sans-serif;

  a {
    margin-top: 40px;
    color: currentColor;
    text-decoration: none;
  }
`;

const MainTitle = styled.h1`
  font-family: "Saira Stencil One", cursive;
  font-size: 40px;
  margin: 30px 0px;
`;

const PageTitle = styled.h2`
  font-size: 30px;
  margin: 30px 0px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 85%;
  font-family: "Raleway", sans-serif;
`;

const Inputs = styled.input`
  font-size: 20px;
  margin-bottom: 10px;
  height: 60px;
  border-radius: 5px;
  border: none;
  font-family: "Raleway", sans-serif;

  ::placeholder {
    padding: 10px;
    font-size: 20px;
  }
`;

const Buttons = styled.button`
  height: 50px;
  background-color: #a328d6;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin: 5px 0px;
  border-radius: 5px;
  font-family: "Raleway", sans-serif;
`;

const NewRecord = styled.button`
  width: 100%;
  height: 120px;
  background-color: #a328d6;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin: 10px 0px;
  border-radius: 5px;
  font-family: "Raleway", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5px;

  p {
    width: 100px;
    text-align: left;
  }

  ion-icon {
    font-size: 30px;
  }
`;

export {
  MainTitle,
  Inputs,
  Buttons,
  NewRecord,
  Container,
  FormWrapper,
  PageTitle,
};
