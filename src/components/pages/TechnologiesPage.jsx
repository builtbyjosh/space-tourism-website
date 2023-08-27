import { useState, useEffect } from "react";
import data from "../../data.json";
import { Box, Text, Heading, Image } from "@chakra-ui/react";

const TechnologiesPage = () => {
  const technologies = data.technology;
  const [technology, setTechnology] = useState();

  const getDestinationsByName = (name) => {
    setTechnology(technologies.find((tech) => tech.name === name));
  };

  useEffect(() => {
    getDestinationsByName("Launch Vehicle");
  }, []);

  return (
    <Box>
      {technology && (
        <>
          <Text>{technology.name}</Text>
          <Text>{technology.description}</Text>
        </>
      )}
    </Box>
  );
};

export default TechnologiesPage;
