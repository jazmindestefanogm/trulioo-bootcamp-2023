"use client";

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
const colors = {
    colors: {
        nav: {
          background: "#A4DCB4",
          color: "#172D2D",
        },
      },
}
export const theme = extendTheme({ colors });
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  )
}
