"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useToken from "../hooks/useToken";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
} from "@chakra-ui/react";

export default function FormLogin() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const { getToken } = useToken();
  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPassword(e.target.value);
  };

  const handleClick = async () => {
    try {
      const receivedToken = await getToken(inputEmail, inputPassword);
      if (receivedToken) {
        if (typeof window != undefined) {
          localStorage.setItem("token", receivedToken);
        }
        router.push(`/getShortCode`);
      }
    } catch (error) {}
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box rounded={"lg"} bg="colors.nav.background" boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                bg="colors.nav.color"
                color="white"
                borderColor="transparent"
                focusBorderColor="transparent"
                type="email"
                _focus={{
                  color: "white",
                }}
                value={inputEmail}
                onChange={handleEmailChange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                bg="colors.nav.color"
                color="white"
                borderColor="transparent"
                focusBorderColor="transparent"
                type="password"
                _focus={{
                  color: "white",
                }}
                value={inputPassword}
                onChange={handlePasswordChange}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              ></Stack>
              <Button
                onClick={handleClick}
                bg="colors.nav.color"
                color={"white"}
                _hover={{
                  bg: "white",
                  color: "black",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
