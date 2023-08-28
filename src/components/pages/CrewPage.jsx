import { useSpaceContext } from "../../context/SpaceContext";
import { Box } from "@chakra-ui/react";
import CrewCard from "../cards/CrewCard";

const CrewPage = () => {
  const { collectionData, collectionIndex } = useSpaceContext();

  return (
    <Box>
      {collectionData && (
        <CrewCard crewMemberData={collectionData[collectionIndex]} />
      )}
    </Box>
  );
};

export default CrewPage;
