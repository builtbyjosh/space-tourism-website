import { createContext, useContext, useState, useEffect } from "react";
import data from "../data.json";

const SpaceContext = createContext();

export const useSpaceContext = () => useContext(SpaceContext);

export const SpaceProvider = ({ children }) => {
  const [collection, setCollection] = useState("home");
  const [collectionData, setCollectionData] = useState([]);
  const [collectionIndex, setCollectionIndex] = useState(0);

  useEffect(() => {
    if (data[collection]) {
      const items = data[collection];
      setCollectionData(items);
      setCollectionIndex(0);
    }
  }, [collection]);

  return (
    <SpaceContext.Provider
      value={{
        collection,
        setCollection,
        collectionData,
        collectionIndex,
        setCollectionIndex,
      }}
    >
      {children}
    </SpaceContext.Provider>
  );
};
