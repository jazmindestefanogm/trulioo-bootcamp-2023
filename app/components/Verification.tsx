"use client";

import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

type ForgotPasswordFormInputs = {
  shortCode: string;
};

export default function Verification() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
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
          >
            Send
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
