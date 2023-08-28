import { createContext, useContext, useState } from "react";
import data from "../data.json";

const SpaceContext = createContext();

export const useSpaceContext = () => useContext(SpaceContext);

export const SpaceProvider = ({ children }) => {
  const [collection, setCollection] = useState(null);
  const [itemData, setItemData] = useState();
  const [activeDestination, setActiveDestination] = useState("Moon");

  const getDataByName = (itemName) => {
    if (data[collection]) {
      const items = data[collection];
      console.log("COLLECTION ITEMS: ", items);
      const foundItem = items.find((item) => item.name === itemName);
      if (foundItem) {
        setItemData(foundItem);
      } else {
        setItemData(null);
      }
    }
  };
  console.log("COLLECTION: ", collection);
  console.log("DESTINATION: ", activeDestination);
  console.log("ITEM DATA: ", itemData);
  return (
    <SpaceContext.Provider
      value={{
        getDataByName,
        collection,
        setCollection,
        itemData,
        activeDestination,
        setActiveDestination,
      }}
    >
      {children}
    </SpaceContext.Provider>
  );
};
