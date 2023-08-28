import { useState, useEffect } from "react";
import { Box, Text, Stack, Divider, Heading, Image } from "@chakra-ui/react";
import DestinationLink from "../menu/DestinationLink";
import { useSpaceContext } from "../../context/SpaceContext";

const DestinationsPage = () => {
  const { getDataByName, itemData, activeDestination } = useSpaceContext();

  useEffect(() => {
    getDataByName(activeDestination);
  }, [activeDestination]);

  console.log("DESTINATION DATA: ", itemData);

  return (
    <Box>
      <Stack direction={"row"}>
        <DestinationLink text={"Moon"} />
        <DestinationLink text={"Mars"} />
        <DestinationLink text={"Europa"} />
        <DestinationLink text={"Titan"} />
      </Stack>
      {itemData && (
        <Stack direction={"column"}>
          <Heading as={"h2"}>{itemData.name}</Heading>
          <Text>{itemData.description}</Text>
          <Divider />
          <Stack direction={"row"}>
            <Stack>
              <Text>AVG. DISTANCE</Text>
              <Heading as={"h5"}>{itemData.distance}</Heading>
            </Stack>
            <Stack>
              <Text>EST. TRAVEL TIME</Text>
              <Heading as={"h5"}>{itemData.travel}</Heading>
            </Stack>
          </Stack>
        </Stack>
      )}
    </Box>
  );
};

export default DestinationsPage;
