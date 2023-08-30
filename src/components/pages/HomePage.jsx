import React from "react";
import { Text, Stack, Box, Circle, Heading } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Box h={"full"} w={"full"}>
      <Stack direction={"row"}>
        <Stack
          direction={"column"}
          textColor={"secondary"}
          textStyle={"primary"}
        >
          <Text as="h5" fontSize="h5">
            SO, YOU WANT TO TRAVEL TO
          </Text>
          <Text as="h1" fontSize="h1">
            SPACE
          </Text>
          <Text>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </Text>
        </Stack>
        <Circle>
          <Text>EXPLORE</Text>
        </Circle>
      </Stack>
    </Box>
  );
};

export default HomePage;
