import { useState, useEffect } from "react";
import data from "../../data.json";
import { Box, Text, Heading, Image } from "@chakra-ui/react";

const DestinationsPage = () => {
  const destinations = data.destinations;
  const [destination, setDestination] = useState();
  const getDestinationsByName = (name) => {
    setDestination(
      destinations.find((destination) => destination.name === name)
    );
  };

  useEffect(() => {
    getDestinationsByName("Moon");
  }, []);
  console.log("DESTINATION DATA: ", destination);
  return (
    <Box>
      {destination && (
        <>
          <Text>{destination.name}</Text>
          <Text>{destination.description}</Text>
          <Text>{destination.distance}</Text>
          <Text>{destination.travel}</Text>
        </>
      )}
    </Box>
  );
};

export default DestinationsPage;
