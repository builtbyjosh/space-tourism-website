import { useState, useEffect } from "react";
import data from "../../data.json";
import { Box, Text, Heading, Image } from "@chakra-ui/react";

const CrewPage = () => {
  const crew = data.crew;
  const [crewMember, setCrewMember] = useState();
  const getCrewByName = (name) => {
    setCrewMember(crew.find((crew) => crew.name === name));
  };

  useEffect(() => {
    getCrewByName("Douglas Hurley");
  }, []);

  return (
    <Box>
      {crewMember && (
        <>
          <Text>{crewMember.name}</Text>
          <Text>{crewMember.bio}</Text>
          <Text>{crewMember.role}</Text>
        </>
      )}
    </Box>
  );
};

export default CrewPage;
