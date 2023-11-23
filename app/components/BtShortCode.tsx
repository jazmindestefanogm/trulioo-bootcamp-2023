"use client";
import { Button } from "@chakra-ui/react";
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

  return <Button onClick={handleGetShortCode}>Get ShortCode</Button>;
};
