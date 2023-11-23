"use client";
import { Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import useShortCode from "../hooks/useShortCode";

export const BtShortCode = () => {
  const router = useRouter();
  const { shortCode, getShortCode } = useShortCode();
  const handleGetShortCode = () => {
    getShortCode();
    if (shortCode) {
      router.push(`/authentication?ShortCode=${shortCode}`);
    }
  };

  return (
    <Flex
      justifyContent={"center"}
      align={"center"}
      style={{ height: "100vh" }}
    >
      <Button onClick={handleGetShortCode}>Get ShortCode</Button>
    </Flex>
  );
};
