import React from "react";
import { Text, Stack } from "@chakra-ui/react";
const MenuLink = ({ step, name }) => {
  return (
    <Stack direction={"row"} textStyle={"secondary"} textColor={"secondary"}>
      <Text as={"h5"} fontWeight={"bold"}>
        {step}
      </Text>
      <Text as={"h5"}>{name}</Text>
    </Stack>
  );
};

export default MenuLink;
