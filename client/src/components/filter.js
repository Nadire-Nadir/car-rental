import { useState } from "react";

const Filter = () => {
  const [category, setCategory] = useState({
    Small: false,
    Medium: false,
    Large: false,
    Estate: false,
    Mremium: false,
    Minivans: false,
    SUVs: false,
  });
  const [priceRange, setPriceRange] = useState({
    "€0 - €50": false,
    "€50 - €100": false,
    "€100 - €150": false,
    "€150 - €200": false,
    "€200+": false,
  });
  const [transmission, setTransmission] = useState({
    Atutomatic: false,
    Manual: false,
  });
  const [power, setPower] = useState({
    Petrol: false,
    Diesel: false,
    "Hybrid(all)": false,
    "Hybrid(petrol/electric)": false,
    "Hybrid(diesel/electric)": false,
    Electric: false,
  });

  const handlePriceRangeFilter = (key) => {
    setPriceRange((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleTransmissionFilter = (key) => {
    setTransmission((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handlePowerFilter = (key) => {
    setPower((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleCategoryFilter = (key) => {
    setCategory((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const cleanFilter = () => {
    setCategory({
      Small: false,
      Medium: false,
      Large: false,
      Estate: false,
      Premium: false,
      Minivans: false,
      SUVs: false,
    });
    setPower({
      Petrol: false,
      Diesel: false,
      "Hybrid(all)": false,
      "Hybrid(petrol/electric)": false,
      "Hybrid(diesel/electric)": false,
      Electric: false,
    });
    setTransmission({
      Atutomatic: false,
      Manual: false,
    });
    setPriceRange({
      "€0 - €50": false,
      "€50 - €100": false,
      "€100 - €150": false,
      "€150 - €200": false,
      "€200 +": false,
    });
  };

  return (
    <div
      className="mt-5 rounded-md px-4"
      style={{ border: "1px solid #e7e7e7" }}
    >
      <div className="flex justify-between items-center">
        <h3>Filter</h3>
        <button
          className="bg-white h-10 border-none rounded-md cursor-pointer text-blue hover:bg-locations-hover"
          onClick={cleanFilter}
        >
          Clear all filters
        </button>
      </div>
      <div className="text-sm pb-8" style={{ borderTop: "1px solid #e7e7e7" }}>
        <h3>Car type</h3>
        {Object.keys(category).map((key) => {
          return (
            <div key={key}>
              <label>
                <input
                  type="checkbox"
                  checked={category[key]}
                  onChange={() => handleCategoryFilter(key)}
                  className="mr-2 w-4 h-4"
                />
                {key}
              </label>
            </div>
          );
        })}
      </div>
      <div className="text-sm pb-8" style={{ borderTop: "1px solid #e7e7e7" }}>
        <h3>Price per day</h3>
        {Object.keys(priceRange).map((key) => {
          return (
            <div key={key}>
              <label>
                <input
                  type="checkbox"
                  checked={priceRange[key]}
                  onChange={() => handlePriceRangeFilter(key)}
                  className="mr-2 w-4 h-4"
                />
                {key}
              </label>
            </div>
          );
        })}
      </div>
      <div className="text-sm pb-8" style={{ borderTop: "1px solid #e7e7e7" }}>
        <h3>Transmission</h3>
        {Object.keys(transmission).map((key) => {
          return (
            <div key={key}>
              <label>
                <input
                  type="checkbox"
                  checked={transmission[key]}
                  onChange={() => handleTransmissionFilter(key)}
                  className="mr-2 w-4 h-4"
                />
                {key}
              </label>
            </div>
          );
        })}
      </div>
      <div className="text-sm pb-8" style={{ borderTop: "1px solid #e7e7e7" }}>
        <h3>Power type</h3>
        {Object.keys(power).map((key) => {
          return (
            <div key={key}>
              <label>
                <input
                  type="checkbox"
                  checked={power[key]}
                  onChange={() => handlePowerFilter(key)}
                  className="mr-2 w-4 h-4"
                />
                {key}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
