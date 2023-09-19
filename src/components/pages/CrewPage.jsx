import { useState, useEffect } from "react";
import { useSpaceContext } from "../../context/SpaceContext";
import { Box, Image, Stack, Button, ButtonGroup } from "@chakra-ui/react";
import CrewCard from "../cards/CrewCard";

const CrewPage = () => {
  const { collectionData, collectionIndex, setCollectionIndex } =
    useSpaceContext();
  const [image, setImage] = useState();

  useEffect(() => {
    if (collectionData[collectionIndex]) {
      setImage(collectionData[collectionIndex].images.png);
    }
  }, [collectionData[collectionIndex]]);

  return (
    <Box>
      <Stack direction={"row"} spacing={10} p={10}>
        <Box>
          {collectionData && (
            <CrewCard crewMemberData={collectionData[collectionIndex]} />
          )}
          <ButtonGroup spacing={2}>
            {[0, 1, 2, 3].map((index) => (
              <Button
                key={index}
                borderRadius="full"
                w="10px"
                h="10px"
                bg={collectionIndex === index ? "blue.500" : "gray.200"} // Change colors as needed
                onClick={() => setCollectionIndex(index)}
              />
            ))}
          </ButtonGroup>
        </Box>

        <Image src={image} />
      </Stack>
    </Box>
  );
};

export default CrewPage;
