import styled from "styled-components";
import { Card } from "./../styles/Card";

export const AdminBarWrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  border-bottom: ${p => p.theme.colors.primary500} 2px solid;
  height: 6rem;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(1rem);

  display: flex;
  align-items: center;

  @media only screen and (min-width: ${p => p.theme.breakpoints.lg}) {
    width: calc(100% - 24rem);
  }
`;

export const OpenSidebar = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.6rem;
  background-color: transparent;
  border: none;

  @media only screen and (min-width: ${p => p.theme.breakpoints.lg}) {
    display: none;
  }

  svg {
    height: 3.2rem;
    width: 3.2rem;
    fill: ${p => p.theme.colors.primary800};
  }
`;

export const AdminProfileButton = styled.button`
  display: inline-block;
  background-color: transparent;
  margin-left: auto;
  margin-right: 0.8rem;
  border: 0;
  display: flex;
  align-items: center;
  font-family: inherit;
  font-size: inherit;
  position: relative;

  &:focus {
    outline: none;
  }

  span {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    overflow: hidden;
    display: inline-block;
  }

  img {
    width: 100%;
    display: inline-block;
  }

  p {
    margin-left: 0.8rem;
    margin-right: 1.6rem;
    display: none;

    @media only screen and (min-width: ${p => p.theme.breakpoints.lg}) {
      display: inline-block;
    }
  }
`;

export const AdminAvatraMenu = styled(Card)`
  position: absolute;
  top: calc(100% + 1.6rem);
  right: 0;

  @media only screen and (min-width: ${p => p.theme.breakpoints.lg}) {
    right: 50%;
    transform: translateX(50%);
  }

  ul {
    list-style: none;
    padding: 0;
    text-align: left;
  }
`;
