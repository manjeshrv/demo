import React from "react";
import Hero from "../components/Hero";
import { Container } from "../styles/Container";
import {
  ContactFormWrapper,
  ContactForm,
  ContactDetails,
  ContactDetail,
  ContactFormSection,
} from "../styles/ContactStyled";
import {
  Input,
  InputLabel,
  InputGroup,
  TextArea,
} from "../styles/InputsStyled";
import { Button } from "../styles/Button";
import { CircularProgress } from "@mui/material";
import bgImg from "./../img/register-bg.jpg";
import {
  LocationOnRounded,
  LocalPhoneRounded,
  EmailRounded,
} from "@mui/icons-material";

const Contact = () => {
  const title = "We love to hear from you";

  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <Hero bgImg={bgImg} title={title} description={description} />
      <ContactFormSection>
        <Container>
          <ContactFormWrapper>
            <ContactForm onSubmit={handleSubmit}>
              <InputGroup>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input id="name" type="text" />
              </InputGroup>
              <InputGroup>
                <InputLabel>Email</InputLabel>
                <Input type="email" />
              </InputGroup>
              <InputGroup>
                <InputLabel>Contact number</InputLabel>
                <Input type="text" />
              </InputGroup>
              <InputGroup>
                <InputLabel>Message</InputLabel>
                <TextArea rows={6} type="text" />
              </InputGroup>
              <Button type="submit" active={false}>
                Send Message
                <span>
                  <CircularProgress sx={{ color: "#fff" }} size="16px" />
                </span>
              </Button>
            </ContactForm>
            <ContactDetails>
              <ContactDetail>
                <LocalPhoneRounded />
                <p>+91-9731400613</p>
              </ContactDetail>
              <ContactDetail>
                <EmailRounded />
                <p>manjeshrv321@gmail.com</p>
              </ContactDetail>
              <ContactDetail>
                <LocationOnRounded />
                <p>
                  98, 4th cross, Ganapathi nagara, Acharya college road,
                  Chikkabanavara, Bangalore - 560090
                </p>
              </ContactDetail>
            </ContactDetails>
          </ContactFormWrapper>
        </Container>
      </ContactFormSection>
      <section>
        <Container>
          <iframe
            title="location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.330953293626!2d77.4936842146464!3d13.078199490786027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3743c0854358ef3c!2zMTPCsDA0JzQxLjUiTiA3N8KwMjknNDUuMSJF!5e0!3m2!1sen!2sin!4v1659860324169!5m2!1sen!2sin"
            style={{
              width: "100%",
              height: "40rem",
              border: 0,
              borderRadius: "1.6rem",
            }}
          ></iframe>
        </Container>
      </section>
    </>
  );
};

export default Contact;
