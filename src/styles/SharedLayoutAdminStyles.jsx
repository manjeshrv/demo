import styled from "styled-components";

export const AdminWrapper = styled.div`
  min-height: 100vh;
  background-color: ${p => p.theme.colors.primary50};
`;

export const AdminMain = styled.main`
  padding-top: 6rem;

  @media only screen and (min-width: ${p => p.theme.breakpoints.lg}) {
    padding-left: 24rem;
  }
`;
