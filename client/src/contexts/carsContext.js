import { createContext, useContext, useState } from "react";

const CarsContext = createContext();

export const CarsProvider = ({ children }) => {
  const [carsData, setCarsData] = useState([]);

  return (
    <CarsContext.Provider value={{ carsData, setCarsData }}>
      {children}
    </CarsContext.Provider>
  );
};

export const useCars = () => {
  return useContext(CarsContext);
};
