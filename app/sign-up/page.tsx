"use client"

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

import "./signUp.css";
import { useState } from "react";

const SignUp = () => {
  const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const checkPasswords= ()=>{
  password == confirmPassword ? (alert(true)) : (alert(false))
}
  return (
    <>
      <div className="form-container">
        <h1>Sign-Up</h1>
        <form action="register" onSubmit={checkPasswords}>
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              pattern=".+@gm2dev.com"
              title="Please provide only a corporate email address"
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              minLength={8}
              size={"8"}
              pattern="(?=.*\d)(?=.*[A-ZÁÉÍÓÚÜÑ].*)"
              title="Debe tener al menos una mayúscula y un dígito"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Confirm your Password</FormLabel>
            <Input
              type="password"
              minLength={8}
              size={"8"}
              pattern="(?=.*\d)(?=.*[A-ZÁÉÍÓÚÜÑ].*)"
              title="Debe tener al menos una mayúscula y un dígito"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <Button
            bgColor="colors.button.bakcground"
            color="colors.button.color"
            type="submit"
          >
            Button
          </Button>
        </form>
      </div>
    </>
  );
};
export default SignUp;
