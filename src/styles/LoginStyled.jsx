import styled from "styled-components";
import { Card } from "./Card";

export const LoginStyled = styled.main``;

export const LoginRow = styled.div`
  min-height: 100vh;
  display: grid;
  position: relative;

  @media only screen and (min-width: 992px) {
    /* grid-template-columns: repeat(2, 1fr); */
    grid-template-columns: 30% 70%;
  }
`;

export const LoginColImg = styled.div`
  height: 100%;
  background-image: linear-gradient(
      to right,
      rgba(119, 192, 238, 0.8),
      rgba(17, 90, 136, 0.8)
    ),
    url("images/register-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LoginColForm = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  margin: auto;

  h5 {
    margin-bottom: 1.6rem;
  }

  ${Card} {
    width: 90%;
    max-width: 600px;
    margin: auto;
  }

  @media only screen and (min-width: 992px) {
    position: relative;
    top: initial;
    left: initial;
    transform: initial;
    width: initial;
    margin: initial;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3.2rem;
  }
`;
