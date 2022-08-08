import React from "react";

import {
  LoginStyled,
  LoginRow,
  LoginColImg,
  LoginColForm,
} from "../styles/LoginStyled";

import { CircularProgress } from "@mui/material";

import { Card } from "../styles/Card";
import { Input, InputGroup, InputLabel } from "../styles/InputsStyled";
import { Button } from "../styles/Button";

const Login = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <LoginStyled>
      <LoginRow>
        <LoginColImg />
        <LoginColForm>
          <Card>
            <form onSubmit={handleSubmit}>
              <InputGroup>
                <InputLabel htmlFor="Email">Email</InputLabel>
                <Input type="email" id="Email"></Input>
              </InputGroup>

              <InputGroup>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input type="password" id="password"></Input>
              </InputGroup>

              <Button type="submit" active={false}>
                Login
                <span>
                  <CircularProgress sx={{ color: "#fff" }} size="16px" />
                </span>
              </Button>
            </form>
          </Card>
        </LoginColForm>
      </LoginRow>
    </LoginStyled>
  );
};

export default Login;
