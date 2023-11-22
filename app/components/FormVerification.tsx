"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

export const FormVerification: React.FC = () => {
  const [shortCode, setShortCode] = useState("");
  const [showOtherComponent, setShowOtherComponent] = useState(false);
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShortCode(e.target.value);
  };

  const handleClick = () => {
    const correctShortCode = "rSqi3gfmNedjgfni";
    if (shortCode === correctShortCode) {
      setVerificationSuccess(true);
      setShowOtherComponent(true);
      router.push(`/authentication?code=${correctShortCode}`);
    } else {
      setVerificationSuccess(false);
      setShowOtherComponent(true);
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      {showOtherComponent ? (
        <div className="message">
          {verificationSuccess ? (
            <p>¡Credenciales verificadas! Renderizando otro componente.</p>
          ) : (
            <p>
              Error: Credenciales incorrectas. Por favor, inténtalo de nuevo.
            </p>
          )}
        </div>
      ) : (
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg="colors.nav.background"
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Do you want to enter?
          </Heading>
          <FormControl id="shortCode">
            <Input
              placeholder="Enter the shortCode"
              variant="filled"
              bg="colors.nav.color"
              focusBorderColor="transparent"
              type="password"
              value={shortCode}
              onChange={handleInputChange}
              _placeholder={{ color: "white" }}
              _hover={{
                color: "black",
              }}
              _focus={{
                bg: "colors.nav.color",
                color: "white",
              }}
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={"white"}
              color={"black"}
              _hover={{
                bg: "colors.nav.color",
                color: "white",
              }}
              onClick={handleClick}
            >
              Send
            </Button>
          </Stack>
        </Stack>
      )}
    </Flex>
  );
};
