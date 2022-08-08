import styled from "styled-components";

export const SidebarWrapper = styled.aside`
  width: 24rem;
  height: 100vh;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(${p => (p.open ? "0" : "-100%")});
  transition: all 0.3s ease;
  background-color: ${p => p.theme.colors.primary900};
  z-index: 10;

  @media only screen and (min-width: ${p => p.theme.breakpoints.lg}) {
    transform: none;
  }
`;

export const CloseSidebarWrapper = styled.div`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const CloseSidebar = styled.button`
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
    fill: ${p => p.theme.colors.primary100};
  }
`;
