"use client";

import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import "./signUp.css";
import { useState } from "react";

const SignUp = () => {
  const URL = "http://localhost:3002/signup ";
  const toast = useToast();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const checkPasswords = async (evt: any) => {
    evt.preventDefault();

    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,60}$/;

    if (!regex.test(password)) {
      toast({
        title:
          "The password must contain at least one capital letter and a number",
        status: "error",
        isClosable: true,
        position: "bottom-left",
      });
    } else {
      if (password === confirmPassword) {
        try {
          const postdata = await fetch(URL, {
            method: "POST",
            headers: new Headers({
              "Content-Type": "application/json",
            }),
            body: JSON.stringify({
              username: user,
              password: password,
            }),
          });
          console.log(postdata);
          if (postdata.ok) {
            toast({
              title: "Account created",
              status: "success",
              isClosable: true,
              position: "bottom-left",
            });
            router.push("/sign-in");
          } else {
            console.log(
              JSON.stringify({
                username: user,
                password: password,
              })
            );
            toast({
              title: "Error creating account",
              status: "error",
              isClosable: true,
              position: "bottom-left",
            });
          }
        } catch (error) {
          console.error("Error:", error);
        }
      } else {
        toast({
          title: "The passwords do not match",
          status: "error",
          isClosable: true,
          position: "bottom-left",
        });
      }
    }
  };

  return (
    <>
      <div className="form-container">
        <h1>Sign-Up</h1>
        <form action="register">
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              pattern=".+@gm2dev.com"
              title="Please provide only a corporate email address"
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
            <FormHelperText>We ll never share your email.</FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              minLength={8}
              size={"8"}
              title="Debe tener al menos una mayúscula y un dígito"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <FormHelperText>We ll never share your email.</FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Confirm your Password</FormLabel>
            <Input
              type="password"
              minLength={8}
              size={"8"}
              title="Debe tener al menos una mayúscula y un dígito"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <FormHelperText>We ll never share your email.</FormHelperText>
          </FormControl>
          <Button
            bgColor="colors.button.bakcground"
            color="colors.button.color"
            type="submit"
            onClick={checkPasswords}
          >
            Button
          </Button>
        </form>
      </div>
    </>
  );
};
export default SignUp;
