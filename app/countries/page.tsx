"use client";
import "./countries.css";
import { Input, Text,Spinner } from "@chakra-ui/react";
import { useCountries } from "../hooks/useCountries";
import { useState } from "react";

const URL = "http://localhost:3002/countries ";
const token = "uVzDsREO9";

const Countries = () => {
  const { setValue, value, handleSearch, filterCountries } = useCountries(
    URL,
    token,
  );
  const [language, setLanguage] = useState("");

  if (typeof window !== 'undefined') {
    localStorage.setItem("language", language);
  }
  return (
    <>
      <h1>Países</h1>
      <Text mb="8px">Valor: {value}</Text>
      <Input
        value={value}
        onChange={handleSearch}
        placeholder="Ingrese un país"
        size="sm"
      />
      <div className="filtered-countries">
        {filterCountries ? (
          filterCountries.length > 0 ? (
            filterCountries.map((country) => (
              <button
                className="country"
                key={country.nombre}
                onClick={() => {
                  setValue(country.nombre);
                  setLanguage(country.idioma);
                }}
              >
                <img src={country.imagen} alt={country.nombre} />
                <p>{country.nombre}</p>
              </button>
            ))
          ) : (
            <p>Ese país no existe, seleccione otro</p>
          )
        ) : (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
      </div>
    </>
  );
};

export default Countries;
