import { useState } from "react";
import { Stack, Image, Text } from "@chakra-ui/react";
import DestinationLink from "../menu/DestinationLink";
import DestinationCard from "../cards/DestinationCard";
import data from "../../data.json";

const DestinationsPage = () => {
  const destinationData = data["destination"];
  const [destinationIndex, setDestinationIndex] = useState(0);

  return (
    <Stack h={"100vh"} direction={"row"} p={10} spacing={10}>
      <Image src={destinationData[destinationIndex].images.png} />
      <Stack direction={"column"}>
        <Stack direction={"row"}>
          {destinationData &&
            destinationData.map((data, index) => {
              return (
                <Text
                  key={index}
                  cursor="pointer"
                  textColor={"secondary"}
                  textStyle={"primary"}
                  textDecoration={
                    index === destinationIndex ? "underline" : "none"
                  }
                  onClick={() => setDestinationIndex(index)}
                >
                  {data.name.toUpperCase()}
                </Text>
              );
            })}
        </Stack>
        {destinationData && (
          <DestinationCard
            destinationData={destinationData[destinationIndex]}
          />
        )}
      </Stack>
    </Stack>
  );
};

export default DestinationsPage;
