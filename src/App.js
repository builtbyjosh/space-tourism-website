import { Box, Text } from "@chakra-ui/react";
import DesktopHeader from "./components/menu/DesktopHeader";
import HomePage from "./components/pages/HomePage";
import DesktopBG from "./assets/home/background-home-desktop.jpg";
import DestinationsPage from "./components/pages/DestinationsPage";

function App() {
  return (
    <Box bgImage={DesktopBG} h={"100vh"} w={"full"}>
      <DesktopHeader />
      <HomePage />
      <DestinationsPage />
    </Box>
  );
}

export default App;
