import { Button } from "@chakra-ui/react";
import React from "react";

const CrewButton = ({ index, active, onClick }) => {
  return (
    <Button
      key={index}
      borderRadius={"full"}
      h="15px"
      p={0}
      minW={"15px"}
      bg={active ? "blue.500" : "gray.200"}
      onClick={onClick}
    />
  );
};

export default CrewButton;
