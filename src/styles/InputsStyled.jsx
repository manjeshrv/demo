import styled, { css } from "styled-components";

const inputStyles = css`
  display: block;
  width: 100%;
  font-family: inherit;
  letter-spacing: 1px;

  font-size: 1.6rem;
  padding: 0.8rem;
  border-radius: 0.8rem;
  border: 2px solid ${p => p.theme.colors.grey500};
  color: inherit;

  &:read-only {
    background-color: ${p => p.theme.colors.grey100};
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(29, 150, 226, 0.6);
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 3.2rem;
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 0.8rem;
`;

export const Input = styled.input`
  ${inputStyles}
`;

export const TextArea = styled.textarea`
  ${inputStyles}
`;
