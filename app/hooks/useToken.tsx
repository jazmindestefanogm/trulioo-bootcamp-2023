"use client";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

interface UseTokenReturnType {
  token: string | null;
  getToken: (email: string, password: string) => Promise<string | null>;
}

const useToken = (): UseTokenReturnType => {
  const toast = useToast();
  const [token, setToken] = useState<string | null>(null);

  const getToken = async (
    email: string,
    password: string
  ): Promise<string | null> => {
    try {
      const response = await fetch("http://localhost:3002/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const fetchedToken = data.token;
        setToken(fetchedToken);
        return fetchedToken;
      } else {
        throw new Error("Failed to fetch token");
      }
    } catch (error) {
      console.error("Error fetching token:", error);
      toast({
        title: `Error fetching token`,
        status: "error",
        position: "bottom-left",
        isClosable: true,
      });
      return null;
    }
  };

  return { token, getToken };
};

export default useToken;
