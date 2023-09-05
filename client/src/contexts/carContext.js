import { createContext, useContext, useState } from "react";

const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [carData, setCarData] = useState();

  return (
    <CarContext.Provider value={{ carData, setCarData }}>
      {children}
    </CarContext.Provider>
  );
};

export const useCar = () => {
  return useContext(CarContext);
};
