import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { SpaceProvider } from "./context/SpaceContext";
import { BrowserRouter } from "react-router-dom/dist";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <SpaceProvider>
          <App />
        </SpaceProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
