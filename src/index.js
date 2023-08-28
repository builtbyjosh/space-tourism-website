import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { SpaceProvider } from "./context/SpaceContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <SpaceProvider>
        <App />
      </SpaceProvider>
    </ChakraProvider>
  </React.StrictMode>
);
