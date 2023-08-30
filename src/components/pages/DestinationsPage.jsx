import { useEffect, useState } from "react";
import { Box, Stack, Image } from "@chakra-ui/react";
import DestinationLink from "../menu/DestinationLink";
import { useSpaceContext } from "../../context/SpaceContext";
import DestinationCard from "../cards/DestinationCard";

const DestinationsPage = () => {
  const { collectionData, collectionIndex } = useSpaceContext();
  const [image, setImage] = useState();

  useEffect(() => {
    if (collectionData[collectionIndex]) {
      setImage(collectionData[collectionIndex].images.png);
    }
  }, [collectionData[collectionIndex]]);

  return (
    <Stack direction={"row"} p={10} spacing={10}>
      <Image src={image} />
      <Stack direction={"column"}>
        <Stack direction={"row"}>
          {collectionData &&
            collectionData.map((data, index) => {
              return (
                <DestinationLink text={data.name} index={index} key={index} />
              );
            })}
        </Stack>
        {collectionData[collectionIndex] && (
          <DestinationCard destinationData={collectionData[collectionIndex]} />
        )}
      </Stack>
    </Stack>
  );
};

export default DestinationsPage;
