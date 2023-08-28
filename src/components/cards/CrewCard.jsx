import React from "react";
import { Box, Text } from "@chakra-ui/react";

const CrewCard = ({ crewMemberData }) => {
  const { name, bio, role } = crewMemberData;
  return (
    <Box>
      <Text>{name}</Text>
      <Text>{bio}</Text>
      <Text>{role}</Text>
    </Box>
  );
};

export default CrewCard;
