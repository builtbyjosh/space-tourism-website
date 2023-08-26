import React from "react";
import { Box, Image, Stack, Divider } from "@chakra-ui/react";
import MenuLink from "./MenuLink";
import logo from "../../assets/shared/logo.svg";

const DesktopHeader = () => {
  return (
    <Box>
      <Stack direction={"row"} p={5}>
        <Image src={logo} mr={"50px"} />
        <Divider color={"secondary"} my="auto" />
        <Box
          bg={"rgba(208,214,249,.25)"}
          p={4}
          backdropFilter="auto"
          backdropBlur="6px"
        >
          <Stack direction={"row"} align="center" justify="center">
            <MenuLink step={"00"} name={"HOME"} />
            <MenuLink step={"01"} name={"DESTINATION"} />
            <MenuLink step={"02"} name={"CREW"} />
            <MenuLink step={"04"} name={"TECHNOLOGY"} />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default DesktopHeader;
