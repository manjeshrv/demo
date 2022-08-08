import styled, { css } from "styled-components";

const headerBorder = props => `2px solid ${props.theme.colors.primary500}`;

const togglerIconBgColor = props => `${props.theme.colors.primary500}`;

const openHeaderMenuStyles = props => {
  if (props.open) {
    return css`
      left: 0;
    `;
  }
};

const openTogglerIconStyles = props => {
  if (props.open) {
    return css`
      & {
        background-color: transparent;
      }

      &::before,
      &::after {
        top: 0;
      }

      &::before {
        transform: rotate(-135deg);
      }

      &::after {
        transform: rotate(135deg);
      }
    `;
  }
};

export const HeaderStyled = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(1rem);
  z-index: 100;
`;

export const HeaderContainer = styled.div`
  height: 6rem;
  border-bottom: ${headerBorder};
  padding: 0 2rem;
  display: flex;
  align-items: center;

  @media only screen and (min-width: ${p => p.theme.breakpoints.lg}) {
    height: 7rem;
  }
`;

export const HeaderBrand = styled.div`
  img {
    height: 4rem;
    width: auto;
    display: inline-block;
  }
`;

export const HeaderMenu = styled.nav`
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100vh;
  padding-top: 9rem;
  transition: all 0.3s ease;

  ${openHeaderMenuStyles}

  @media only screen and (min-width: ${p => p.theme.breakpoints.lg}) {
    background-color: transparent;
    position: relative;
    top: initial;
    left: initial;
    width: initial;
    height: initial;
    padding-top: 0;
    margin-left: auto;
  }

  ul {
    padding: 0;
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    @media only screen and (min-width: ${p => p.theme.breakpoints.lg}) {
      flex-direction: row;
    }
  }

  a:link,
  a:visited {
    font-weight: 700;
    padding: 0.8rem 1.6rem;
    display: inline-block;
    border-radius: 0.8rem;
    transition: all 0.3s ease;
  }

  a:hover {
    color: #fff;
    background-color: ${p => p.theme.colors.primary300};
  }

  a:active {
    color: #fff;
    background-color: ${p => p.theme.colors.primary400};
  }

  a.active {
    color: #fff;
    background-image: linear-gradient(
      to right,
      ${p => p.theme.colors.primary500},
      ${p => p.theme.colors.primary700}
    );
    background-size: 120%;
  }
`;

export const HeaderToggler = styled.button`
  display: inline-block;
  margin-left: auto;
  height: 4rem;
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media only screen and (min-width: ${p => p.theme.breakpoints.lg}) {
    display: none;
  }
`;

export const TogglerIcon = styled.span`
  & {
    width: 4rem;
    position: relative;
  }

  &,
  &::before,
  &::after {
    display: inline-block;
    height: 2px;
    background-color: ${togglerIconBgColor};
    border-radius: 2rem;
    transition: all 0.3s ease;
  }

  &::before,
  &::after {
    content: "";
    width: 100%;
    position: absolute;
    left: 0;
  }

  &::before {
    top: -1rem;
  }

  &::after {
    top: 1rem;
  }

  ${openTogglerIconStyles}
`;
