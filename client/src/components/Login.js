import React,{useState,UseEffect} from 'react';
import styled, { ThemeProvider,createGlobalStyle } from 'styled-components';
import { Form, Button, Input,theme ,H1,Label,Span} from "../styled-components/index";

export default function Login() {
   const [theme,setTheme]=useState({mode:'dark'})
      

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Form>
          <H1>Login:</H1>
          <Span>
            User
            <Input type="radio" id="User" name="useType" value="user" />
            Admin
            <input type="radio" id="Admin" name="useType" value="admin" />
          </Span>

          <Label>Username</Label>
          <Input type="text" id="username" name="username" />

          <Label>Password</Label>
          <Input type="text" id="password" name="password" />

          <Button type="submit">Login</Button>
        </Form>
        <Button
          onClick={e =>
            setTheme(
              theme.mode === "dark"
                ? { ...theme, mode: "light" }
                : { ...theme, mode: "dark" }
            )
          }
        >
          ToggleTheme
        </Button>

      </>
    </ThemeProvider>
  );
}

// Styles

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => (props.theme.mode === "dark" ? "#888" : "#456")};
    color:${props => (props.theme.mode === "light" ? "#456" : "#888")};
  
}
`;
