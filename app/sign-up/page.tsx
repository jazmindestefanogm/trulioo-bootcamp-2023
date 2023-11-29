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

const URL = "http://localhost:3002/signup";

const regex = /^(?=.*[A-Z])(?=.*\d).+/;

const SignUp = () => {
  const toast = useToast();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const checkPasswords = async (evt: any) => {
    evt.preventDefault();

    if (!user.endsWith("@gm2dev.com")) {
      toast({
        title:
          "Please provide a corporate email address ending with @gm2dev.com",
        status: "error",
        isClosable: true,
        position: "bottom-left",
      });
      return;
    } else {
      console.log("ciclo else");

      if (password == confirmPassword) {
        console.log("password iguales")
        if (regex.test(password)) {
          console.log("regex cumplido")
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
                JSON.stringify({ username: user, password: password }),
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
          console.log("regex no cumplido")
          toast({
            title:
              "The password must contain at least one capital letter and a symbol",
            status: "error",
            isClosable: true,
            position: "bottom-left",
          });
        }
      } else {
        toast({
          title: "Passwords do not match",
          status: "error",
          isClosable: true,
          position: "bottom-left",
        });
        console.log("2do if");
        return;
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
