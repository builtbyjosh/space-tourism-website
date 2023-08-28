import { Box, Text } from "@chakra-ui/react";
import React from "react";

const TechCard = ({ techData }) => {
  return (
    <Box>
      <Text>{techData.name}</Text>
      <Text>{techData.description}</Text>
    </Box>
  );
};

export default TechCard;
