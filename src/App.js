import { Box } from "@chakra-ui/react";
import DesktopHeader from "./components/menu/DesktopHeader";
import HomePage from "./components/pages/HomePage";
import DesktopBG from "./assets/home/background-home-desktop.jpg";
import DestinationsPage from "./components/pages/DestinationsPage";
import CrewPage from "./components/pages/CrewPage";
import TechnologiesPage from "./components/pages/TechnologiesPage";
import { useSpaceContext } from "./context/SpaceContext";

function App() {
  const { collection } = useSpaceContext();
  return (
    <Box bgImage={DesktopBG} h={"100vh"} w={"full"}>
      <DesktopHeader />
      {collection === "home" && <HomePage />}
      {collection === "destination" && <DestinationsPage />}
      {collection === "crew" && <CrewPage />}
      {collection === "technology" && <TechnologiesPage />}
    </Box>
  );
}

export default App;
