import { useState } from "react";
import { Box, Image, Stack } from "@chakra-ui/react";
import CrewCard from "../cards/CrewCard";
import CrewButton from "../Buttons/CrewButton";
import data from "../../data.json";

const CrewPage = () => {
  const crewData = data["crew"];
  const [crewIndex, setCrewIndex] = useState(0);

  console.log(crewData);

  return (
    <Stack h={"100vh"} direction={"row"} spacing={10}>
      <Box width={"50%"}>
        <Stack>
          {crewData && <CrewCard crewMemberData={crewData[crewIndex]} />}
          <Stack direction={"row"} spacing={5}>
            {crewData.map((data, index) => (
              <CrewButton
                key={index}
                index={index}
                active={crewIndex === index}
                onClick={() => setCrewIndex(index)}
              />
            ))}
          </Stack>
        </Stack>
      </Box>
      <Box width={"50%"}>
        <Image src={crewData[crewIndex].images.png} />
      </Box>
    </Stack>
  );
};

export default CrewPage;
