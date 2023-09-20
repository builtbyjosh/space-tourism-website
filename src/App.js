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
import { Routes, Route } from "react-router-dom";
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
    <Box
      bgImage={selectedBgImage}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      h={"full"}
      w={"full"}
    >
      <DesktopHeader />
      {/* <Box p={10}>
        {collection === "home" && <HomePage />}
        {collection === "destination" && <DestinationsPage />}
        {collection === "crew" && <CrewPage />}
        {collection === "technology" && <TechnologiesPage />}
      </Box> */}
      <Routes>
        <Route path="/" exact Component={HomePage} />
        <Route path="/destination" exact Component={DestinationsPage} />
        <Route path="/crew" exact Component={CrewPage} />
        <Route path="/technology" exact Component={TechnologiesPage} />
      </Routes>
    </Box>
  );
}

export default App;
