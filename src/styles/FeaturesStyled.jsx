import styled, { css } from "styled-components";

const reverseImg = props => {
  if (props.reverse) {
    return css`
      grid-row: 1 / -1;
      grid-column: 2 / 3;
    `;
  }
};

const reverseContent = props => {
  if (props.reverse) {
    return css`
      grid-row: 1 / -1;
      grid-column: 1 / 2;
    `;
  }
};

export const FeatureCardImg = styled.div`
  height: 30rem;
  width: 100%;
  border-radius: 1.6rem;
  overflow: hidden;

  @media only screen and (min-width: ${p => p.theme.breakpoints.lg}) {
    height: 40rem;
  }

  img {
    display: inline-block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FeatureCardContent = styled.div`
  ul {
    margin-left: 1.6rem;
  }

  h4 {
    margin-bottom: 1.6rem;
  }

  li {
    line-height: 1.7;
  }

  li:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;

export const FeatureCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  &:not(:last-child) {
    margin-bottom: 3.2rem;

    @media only screen and (min-width: ${p => p.theme.breakpoints.lg}) {
      margin-bottom: 4.8rem;
    }
  }

  @media only screen and (min-width: ${p => p.theme.breakpoints.lg}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3.2rem;
    align-items: center;

    ${FeatureCardImg} {
      ${reverseImg}
    }

    ${FeatureCardContent} {
      ${reverseContent}
    }
  }
`;
