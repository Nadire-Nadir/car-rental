const Filter = ({
  category,
  setCategory,
  power,
  setPower,
  price,
  setPrice,
  transmission,
  setTransmission,
}) => {
  const categoryOptions = [
    "Small",
    "Medium",
    "Large",
    "Estate",
    "Premium",
    "Minivans",
    "SUVs",
  ];

  const priceRange = [
    { min: 0, max: 50 },
    { min: 51, max: 100 },
    { min: 101, max: 150 },
    { min: 151, max: 200 },
    { min: 201 },
  ];
  const transmissionOptions = ["Automatic", "Manual"];
  const powerOptions = [
    "Petrol",
    "Diesel",
    "Hybrid(all)",
    "Hybrid(petrol/electric)",
    "Hybrid(diesel/electric)",
    "Electric",
  ];

  const handlePrice = (option) => {
    if (JSON.stringify(price).includes(JSON.stringify(option))) {
      const newPrice = price.filter(
        (item) => JSON.stringify(item) !== JSON.stringify(option)
      );
      setPrice(newPrice);
    } else {
      setPrice([...price, option]);
    }
  };

  const handleTransmissionFilter = (option) => {
    if (transmission.includes(option)) {
      const newTransmission = transmission.filter((item) => item !== option);
      setTransmission(newTransmission);
    } else {
      setTransmission([...transmission, option]);
    }
  };

  const handlePowerFilter = (option) => {
    if (power.includes(option)) {
      const newPower = power.filter((item) => item !== option);
      setPower(newPower);
    } else {
      setPower([...power, option]);
    }
  };

  const handleCategoryFilter = (option) => {
    if (category.includes(option)) {
      const newCategory = category.filter((item) => item !== option);
      setCategory(newCategory);
    } else {
      setCategory([...category, option]);
    }
  };

  const cleanFilter = () => {
    setCategory([]);
    setPower([]);
    setTransmission([]);
    setPrice([]);
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
        {categoryOptions.map((option) => {
          return (
            <div key={option}>
              <label>
                <input
                  type="checkbox"
                  checked={category.includes(option)}
                  onChange={() => handleCategoryFilter(option)}
                  className="mr-2 w-4 h-4"
                />
                {option}
              </label>
            </div>
          );
        })}
      </div>
      <div className="text-sm pb-8" style={{ borderTop: "1px solid #e7e7e7" }}>
        <h3>Price per day</h3>
        {priceRange.map((option, index) => {
          return (
            <div key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={JSON.stringify(price).includes(
                    JSON.stringify(option)
                  )}
                  onChange={() => handlePrice(option)}
                  className="mr-2 w-4 h-4"
                />
                {option.max ? (
                  <span>
                    €{option.min} - €{option.max}
                  </span>
                ) : (
                  <span>€{option.min} +</span>
                )}
              </label>
            </div>
          );
        })}
      </div>
      <div className="text-sm pb-8" style={{ borderTop: "1px solid #e7e7e7" }}>
        <h3>Transmission</h3>
        {transmissionOptions.map((option) => {
          return (
            <div key={option}>
              <label>
                <input
                  type="checkbox"
                  checked={transmission.includes(option)}
                  onChange={() => handleTransmissionFilter(option)}
                  className="mr-2 w-4 h-4"
                />
                {option}
              </label>
            </div>
          );
        })}
      </div>
      <div className="text-sm pb-8" style={{ borderTop: "1px solid #e7e7e7" }}>
        <h3>Power type</h3>
        {powerOptions.map((option) => {
          return (
            <div key={option}>
              <label>
                <input
                  type="checkbox"
                  checked={power.includes(option)}
                  onChange={() => handlePowerFilter(option)}
                  className="mr-2 w-4 h-4"
                />
                {option}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
