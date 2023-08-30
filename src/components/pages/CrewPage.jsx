import { useState, useEffect } from "react";
import { useSpaceContext } from "../../context/SpaceContext";
import { Box, Image, Stack } from "@chakra-ui/react";
import CrewCard from "../cards/CrewCard";

const CrewPage = () => {
  const { collectionData, collectionIndex } = useSpaceContext();
  const [image, setImage] = useState();

  useEffect(() => {
    if (collectionData[collectionIndex]) {
      setImage(collectionData[collectionIndex].images.png);
    }
  }, [collectionData[collectionIndex]]);
  return (
    <Box>
      <Stack direction={"row"} spacing={10}>
        {collectionData && (
          <CrewCard crewMemberData={collectionData[collectionIndex]} />
        )}
        <Image src={image} />
      </Stack>
    </Box>
  );
};

export default CrewPage;
