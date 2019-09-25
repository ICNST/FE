import React,{useState,UseEffect} from 'react';
import styled, { ThemeProvider,createGlobalStyle } from 'styled-components';
import { Form, Button, Input,theme } from "../styled-components/index";

export default function Login() {
  // const [theme,setTheme]=useState({mode:'dark'})
  return (
    <ThemeProvider theme={theme}>
      {/* <>
        <GlobalStyle /> */}
        <Form>
          <h3>Login:</h3>
          <span>
            User
            <Input type="radio" id="User" name="useType" value="user" />
            Admin
            <input type="radio" id="Admin" name="useType" value="admin" />
          </span>

          <label>Username</label>
          <Input type="text" id="username" name="username" />

          <label>Password</label>
          <Input type="text" id="password" name="password" />

          <Button type="submit">Login</Button>
        </Form>
        {/* <Button
          onClick={e =>
            setTheme(
              theme.mode === "dark" ? { mode: "" } : { mode: "dark" }
            )
          }
        >
          ToggleTheme
        </Button> */}
      {/* </> */}
    </ThemeProvider>
  );
}

// Styles

// const GlobalStyle = createGlobalStyle`
// body {
//   background-color: ${props => props.theme.mode === "dark" ? "#111" : "#EEE"}
    
//     color:${props => (props.theme.mode === "dark" ? "#EEE" : "#111")}
// }
// `;


