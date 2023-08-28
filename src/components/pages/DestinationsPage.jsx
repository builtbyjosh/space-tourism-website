import { Box, Stack } from "@chakra-ui/react";
import DestinationLink from "../menu/DestinationLink";
import { useSpaceContext } from "../../context/SpaceContext";
import DestinationCard from "../cards/DestinationCard";

const DestinationsPage = () => {
  const { collectionData, collectionIndex } = useSpaceContext();
  return (
    <Box>
      <Stack direction={"row"}>
        {collectionData &&
          collectionData.map((data, index) => {
            return (
              <DestinationLink text={data.name} index={index} key={index} />
            );
          })}
      </Stack>
      {collectionData && (
        <DestinationCard destinationData={collectionData[collectionIndex]} />
      )}
    </Box>
  );
};

export default DestinationsPage;
