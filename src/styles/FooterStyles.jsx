import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 6rem 2rem;

  a {
    &:link,
    &:visited {
      display: inline-block;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    &:hover {
      color: ${p => p.theme.colors.primary100};
    }

    &:active {
      color: #fff;
    }
  }
`;

export const FooterRow = styled.div`
  display: grid;
  grid-gap: 3.2rem;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (min-width: ${p => p.theme.breakpoints.md}) {
    grid-template-columns: 1fr repeat(2, max-content);
  }

  @media only screen and (min-width: ${p => p.theme.breakpoints.lg}) {
    grid-gap: 12rem;
  }
`;

export const FooterLogo = styled.div`
  grid-column: 1 / -1;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${p => p.theme.breakpoints.md}) {
    grid-column: initial;
    align-items: flex-start;
  }
`;

export const FooterBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-bottom: 3.2rem;

  img {
    display: inline-block;
    height: clamp(5rem, 3.6154rem + 3.8462vw, 9rem);
  }
`;

export const FooterSocialIcons = styled.div`
  margin-top: 0.8rem;
  display: flex;
  gap: 2rem;

  svg {
    height: 3rem;
    width: 3rem;
    fill: currentColor;
  }
`;

export const FooterSitemap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FooterTerms = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FooterCopyright = styled.div`
  border-top: 1px solid currentColor;
  padding: 1.6rem;
  text-align: center;
  width: calc(100% - 4rem);
  margin: 0 auto;
`;
