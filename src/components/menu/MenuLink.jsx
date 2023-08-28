import React from "react";
import { Text, Stack } from "@chakra-ui/react";
import { useSpaceContext } from "../../context/SpaceContext";
const MenuLink = ({ step, name }) => {
  const { setCollection } = useSpaceContext();
  return (
    <Stack
      direction={"row"}
      textStyle={"secondary"}
      textColor={"secondary"}
      cursor={"pointer"}
      onClick={() => setCollection(name)}
    >
      <Text as={"h5"} fontWeight={"bold"}>
        {step}
      </Text>
      <Text as={"h5"}>{name.toUpperCase()}</Text>
    </Stack>
  );
};

export default MenuLink;
