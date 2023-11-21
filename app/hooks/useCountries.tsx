"use client";
import { ChangeEvent, useEffect, useState } from "react";

type country = {
  imagen: string;
  nombre: string;
  bandera: string;
  idioma: string;
};

export const useCountries = (URL: string, authorizationToken: string) => {
  const [countries, setCountries] = useState<country[]>([]);
  const [value, setValue] = useState("");

  const fetchCountries = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const json = await response.json();
      setCountries(json);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, [URL, authorizationToken]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const filterCountries = value
    ? countries.filter((dato) =>
        dato.nombre.toLowerCase().includes(value.toLowerCase()),
      )
    : countries;

  return {
    setValue,
    value,
    handleSearch,
    filterCountries,
  };
};
