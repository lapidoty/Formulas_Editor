import React from "react";
import styled from "styled-components";
import Display from "./Display";
import Buttons from "./Buttons";
import Calculator from "./styles/Calculator";

const Footer = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 2rem;
  text-align: center;
  > * {
    margin-bottom: 0.5rem;
  }
`;

const App = () => {
  return (
    <>
      <Calculator>
        <header>Payslips Calculator</header>
        <Display />
        <Buttons />
      </Calculator>
    </>
  );
};

export default App;
