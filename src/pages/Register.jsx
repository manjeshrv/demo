import React from "react";

import {
  RegisterStyled,
  RegisterRow,
  RegisterColImg,
  RegisterColForm,
} from "../styles/RegisterStyled";

import { CircularProgress } from "@mui/material";

import { Card } from "../styles/Card";
import { Input, InputGroup, InputLabel } from "../styles/InputsStyled";
import { Button } from "../styles/Button";

const Register = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <RegisterStyled>
      <RegisterRow>
        <RegisterColImg />
        <RegisterColForm>
          <Card>
            <h5>Set password to complete registration</h5>

            <form onSubmit={handleSubmit}>
              <InputGroup>
                <InputLabel htmlFor="Email">Email</InputLabel>
                <Input
                  type="email"
                  id="Email"
                  readOnly
                  value="lorem@example.com"
                ></Input>
              </InputGroup>

              <InputGroup>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input type="password" id="password"></Input>
              </InputGroup>

              <InputGroup>
                <InputLabel htmlFor="passwordRepeat">
                  Repeat Password
                </InputLabel>
                <Input type="password" id="passwordRepeat"></Input>
              </InputGroup>

              <Button type="submit" active={false}>
                Complete Registration
                <span>
                  <CircularProgress sx={{ color: "#fff" }} size="16px" />
                </span>
              </Button>
            </form>
          </Card>
        </RegisterColForm>
      </RegisterRow>
    </RegisterStyled>
  );
};

export default Register;
