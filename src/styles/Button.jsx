import styled, { css } from "styled-components";

const buttonActive = props => {
  if (props.active) {
    return css`
      background-image: linear-gradient(
        to right,
        ${props => props.theme.colors.primary300},
        ${props => props.theme.colors.primary300}
      );
      cursor: not-allowed;
    `;
  } else {
    return css`
      background-image: linear-gradient(
        to right,
        ${props => props.theme.colors.primary500},
        ${props => props.theme.colors.primary700}
      );
      cursor: pointer;
    `;
  }
};

export const Button = styled.button`
  border: none;
  background-color: transparent;
  font-family: inherit;
  font-size: 1.6rem;
  letter-spacing: 1px;
  font-weight: 700;
  color: #fff;
  background-size: 120%;
  padding: 1rem 1.6rem;
  border-radius: 0.8rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  ${buttonActive}

  span {
    display: ${p => (p.active ? "flex" : "none")};
    align-items: center;
    justify-content: center;
  }

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;
