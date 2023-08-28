import React from "react";
import { Text } from "@chakra-ui/react";
import { useSpaceContext } from "../../context/SpaceContext";

const DestinationLink = ({ text }) => {
  const { activeDestination, setActiveDestination } = useSpaceContext();

  return (
    <Text
      cursor="pointer"
      textDecoration={activeDestination === text ? "underline" : "none"}
      onClick={() => setActiveDestination(text)}
    >
      {text.toUpperCase()}
    </Text>
  );
};

export default DestinationLink;
