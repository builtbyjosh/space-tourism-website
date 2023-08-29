import React from "react";
import { SimpleGrid, Stack, Text, Divider } from "@chakra-ui/react";

const DestinationCard = ({ destinationData }) => {
  const { name, description, distance, travel } = destinationData;
  return (
    <Stack direction={"column"} textColor={"secondary"} textStyle={"primary"}>
      <Text as={"h2"} fontSize={"h2"}>
        {name}
      </Text>
      <Text>{description}</Text>
      <Divider />
      <Stack direction={"row"}>
        <Stack>
          <Text>AVG. DISTANCE</Text>
          <Text as={"h5"} fontSize={"h5"}>
            {distance}
          </Text>
        </Stack>
        <Stack>
          <Text>EST. TRAVEL TIME</Text>
          <Text as={"h5"} fontSize={"h5"}>
            {travel}
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DestinationCard;
