import { Box } from "@chakra-ui/react";
import { useSpaceContext } from "../../context/SpaceContext";
import TechCard from "../cards/TechCard";

const TechnologiesPage = () => {
  const { collectionData, collectionIndex } = useSpaceContext();

  return (
    <Box>
      {collectionData && (
        <TechCard techData={collectionData[collectionIndex]} />
      )}
    </Box>
  );
};

export default TechnologiesPage;
