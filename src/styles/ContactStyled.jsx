import styled from "styled-components";
import { Card } from "./Card";

export const ContactFormSection = styled.section`
  @media only screen and (min-width: ${p => p.theme.breakpoints.lg}) {
    padding-top: 0;
  }
`;

export const ContactFormWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media only screen and (min-width: ${p => p.theme.breakpoints.lg}) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    transform: translateY(-10rem);
    margin-bottom: -10rem;
    padding: 3.2rem;
    flex-direction: row;
  }

  @media only screen and (min-width: ${p => p.theme.breakpoints.xxl}) {
    width: 100%;
    transform: translateY(-10rem);
    padding: 3.2rem;
    flex-direction: row;
  }
`;

export const ContactForm = styled.form`
  flex: 1;
`;

export const ContactDetails = styled.div`
  flex-basis: 35%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media only screen and (min-width: ${p => p.theme.breakpoints.lg}) {
    padding-top: 2.4rem;
  }
`;

export const ContactDetail = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 2.8rem;
    height: 2.8rem;
    margin-right: 0.8rem;
    fill: ${p => p.theme.colors.primary600};
  }
`;
