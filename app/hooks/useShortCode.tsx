import { useState } from "react";
const useShortCode = () => {
  const [shortCode, setShortCode] = useState("");
  const url = "http://localhost:3002/short_code";
  const token = "uVzDsREO9";

  const getShortCode = async () => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const data = await response.json();
      setShortCode(data.short_code);
      console.log("Success:", data);
    } catch (error) {
      console.error("Error fetching shortcode:", error);
    }
  };

  return { shortCode, getShortCode };
};

export default useShortCode;
