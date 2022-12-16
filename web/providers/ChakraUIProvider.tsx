import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
interface Props {
  children: React.ReactNode;
}
const ChakraUIProvider: React.FC<Props> = ({ children }) => {
  return <ChakraProvider cssVarsRoot={null}>{children}</ChakraProvider>;
};

export default ChakraUIProvider;
