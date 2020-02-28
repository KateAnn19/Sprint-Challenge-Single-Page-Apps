import React from "react";
import {StyledDiv} from "../Styled";


export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
      <StyledDiv>
        <h1>Welcome to the ultimate fan site!</h1>
      </StyledDiv>
      </header>
        <img
        className="main-img"
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="rick"
        />
    </section>
  );
}