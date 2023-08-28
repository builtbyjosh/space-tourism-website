import React from "react";
import { Text } from "@chakra-ui/react";
import { useSpaceContext } from "../../context/SpaceContext";

const DestinationLink = ({ text, index }) => {
  const { setCollectionIndex, collectionIndex } = useSpaceContext();
  return (
    <Text
      cursor="pointer"
      textDecoration={index === collectionIndex ? "underline" : "none"}
      onClick={() => setCollectionIndex(index)}
    >
      {text.toUpperCase()}
    </Text>
  );
};

export default DestinationLink;
