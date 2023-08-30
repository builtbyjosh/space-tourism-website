import React from "react";
import { Box, Text } from "@chakra-ui/react";

const CrewCard = ({ crewMemberData }) => {
  const { name, bio, role } = crewMemberData;
  return (
    <Box textColor={"secondary"} textStyle={"primary"}>
      <Text fontSize={"h4"}>{role}</Text>
      <Text fontSize={"h3"}>{name}</Text>
      <Text>{bio}</Text>
    </Box>
  );
};

export default CrewCard;
