import { useState, useEffect } from "react";
import { useSpaceContext } from "../../context/SpaceContext";
import { Box, Image, Stack } from "@chakra-ui/react";
import CrewCard from "../cards/CrewCard";
import CrewButton from "../Buttons/CrewButton";

const CrewPage = () => {
  const { collectionData, collectionIndex, setCollectionIndex } =
    useSpaceContext();
  const [image, setImage] = useState();

  useEffect(() => {
    if (collectionData[collectionIndex]) {
      setImage(collectionData[collectionIndex].images.png);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionData, collectionIndex]);

  console.log("collectionIndex:", collectionIndex);

  return (
    <Stack h={"100vh"} direction={"row"} spacing={10}>
      <Box width={"50%"}>
        <Stack>
          {collectionData && (
            <CrewCard crewMemberData={collectionData[collectionIndex]} />
          )}
          <Stack direction={"row"} spacing={5}>
            {collectionData.map((data, index) => (
              <CrewButton
                key={index}
                index={index}
                active={collectionIndex === index}
                onClick={() => setCollectionIndex(index)}
              />
            ))}
          </Stack>
        </Stack>
      </Box>
      <Box width={"50%"}>
        <Image src={image} />
      </Box>
    </Stack>
  );
};

export default CrewPage;
