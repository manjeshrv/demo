import styled, { css } from "styled-components";

const backImg = p => {
  if (p.bgImg) {
    return css`
      background-image: linear-gradient(
          to right,
          rgba(29, 150, 226, 0.8),
          rgba(29, 150, 226, 0.8)
        ),
        url(${p => p.bgImg});
    `;
  }
};

export const HeroWrapper = styled.section`
  padding: 1.6rem;
  height: calc(100vh - 6rem);

  @media only screen and (min-width: ${p => p.theme.breakpoints.lg}) {
    padding: 3.2rem;
    height: calc(100vh - 7rem);
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 1.6rem;
  overflow: hidden;
  position: relative;
  ${backImg}
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 60rem;
  color: white;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  margin-bottom: 1.6rem;
`;

export const HeroDescription = styled.p`
  font-size: 2rem;
`;
