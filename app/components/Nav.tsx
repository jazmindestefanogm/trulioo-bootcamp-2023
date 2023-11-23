
import { Flex } from "@chakra-ui/react";
import Link from "next/link";
export const Nav = () => {
  return (
    <Flex
      align={"center"}
      justify={"flex-end"}
      bg="colors.nav.background"
      w="100%"
      p={5}
      h={5}
      color="colors.nav.color"
      as={"nav"}
    >
      <Flex gap={20}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/sign-up">sign Up</Link>
      </Flex>
    </Flex>
  );
};
