import { Box } from "@chakra-ui/react";
import DesktopHeader from "./components/menu/DesktopHeader";
import HomePage from "./components/pages/HomePage";
import DestinationsPage from "./components/pages/DestinationsPage";
import CrewPage from "./components/pages/CrewPage";
import TechnologiesPage from "./components/pages/TechnologiesPage";
import { useSpaceContext } from "./context/SpaceContext";
import HomeBg from "./images/home/background-home-desktop.jpg";
import CrewBg from "./images/crew/background-crew-desktop.jpg";
import DestinationBg from "./images/destination/background-destination-desktop.jpg";
import TechnologyBg from "./images/technology/background-technology-desktop.jpg";

function App() {
  const { collection, collectionIndex } = useSpaceContext();

  const collectionMap = {
    home: HomeBg,
    crew: CrewBg,
    destination: DestinationBg,
    technology: TechnologyBg,
  };
  const selectedBgImage = collectionMap[collection];
  return (
    <Box bgImage={selectedBgImage} h={"100vh"} w={"full"}>
      <DesktopHeader />
      <Box p={10}>
        {collection === "home" && <HomePage />}
        {collection === "destination" && <DestinationsPage />}
        {collection === "crew" && <CrewPage />}
        {collection === "technology" && <TechnologiesPage />}
      </Box>
    </Box>
  );
}

export default App;
