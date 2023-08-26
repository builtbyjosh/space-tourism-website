import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  textStyles: {
    primary: {
      fontFamily: "Bellefair",
    },
    secondary: {
      fontFamily: "Barlow Condensed",
    },
  },
  fontSizes: {
    h1: "150px",
    h2: "100px",
    h3: "56px",
    h4: "32px",
    h5: "28px",
  },
  colors: {
    primary: "#0B0D17",
    secondary: "#D0D6F9",
    tertiary: "#ffffff",
  },
});

export default theme;
