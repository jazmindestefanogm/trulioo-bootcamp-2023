"use client";
import { Button } from "@chakra-ui/react";
import useShortCode from "../hooks/useShortCode";

export const BtShortCode = () => {
  const { shortCode, getShortCode } = useShortCode();
  console.log(shortCode);
  return <Button onClick={getShortCode}>Get ShortCode</Button>;
};
