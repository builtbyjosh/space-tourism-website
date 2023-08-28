import React from "react";
import { Stack, Text, Heading, Divider } from "@chakra-ui/react";

const DestinationCard = ({ destinationData }) => {
  const { name, description, distance, travel } = destinationData;
  console.log("destinationData: ", destinationData);
  return (
    <Stack direction={"column"}>
      <Heading as={"h2"}>{name}</Heading>
      <Text>{description}</Text>
      <Divider />
      <Stack direction={"row"}>
        <Stack>
          <Text>AVG. DISTANCE</Text>
          <Heading as={"h5"}>{distance}</Heading>
        </Stack>
        <Stack>
          <Text>EST. TRAVEL TIME</Text>
          <Heading as={"h5"}>{travel}</Heading>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DestinationCard;
