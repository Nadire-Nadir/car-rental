import { useEffect, useState } from "react";
import carService from "../services/cars";

import CarDetail from "../components/carDetail";
import Filter from "../components/filter";
import NavBar from "../components/navBar";
import SearchSummary from "../components/searchSummary";
import Footer from "../components/footer";

const CarList = () => {
  const [category, setCategory] = useState([]);
  const [price, setPrice] = useState([]);
  const [power, setPower] = useState([]);
  const [transmission, setTransmission] = useState([]);
  const [carsData, setCarsData] = useState([]);
  const [updateSearch, setUpdateSearch] = useState(false);
  const [loading, setLoading] = useState(false);

  const storedSummary = localStorage.getItem("searchSummary");
  const searchSummary = JSON.parse(storedSummary);
  const { startDate, endDate, startTime, endTime, pickupLocationId } =
    searchSummary;

  const combineDateTime = (dateValue, timeValue) => {
    const [hours, minutes] = timeValue.split(":");
    const [year, month, day] = dateValue.split("-");

    const dateTime = new Date(Date.UTC(year, month - 1, day, hours, minutes));
    return dateTime.toISOString();
  };

  const fetchCars = async () => {
    const startDateTime = combineDateTime(startDate, startTime);
    const endDateTime = combineDateTime(endDate, endTime);
    try {
      const response = await carService.getCars({
        params: {
          locationId: pickupLocationId,
          startDate: startDateTime,
          endDate: endDateTime,
          page: 1,
          limit: 20,
          power: power,
          category: category,
          transmission: transmission,
          price: price,
        },
      });

      setCarsData(response);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, [category, price, power, transmission, updateSearch]);

  return (
    <div className="w-screen h-screen">
      <NavBar />
      <main className="pt-16">
        <div className="max-w-6xl mx-auto mb-8">
          <div className="mt-2">
            <SearchSummary
              setUpdateSearch={setUpdateSearch}
              updateSearch={updateSearch}
            />
          </div>

          <div className="mt-5 flex space-x-6">
            <div className="w-1/4 flex-col">
              <Filter
                category={category}
                setCategory={setCategory}
                power={power}
                setPower={setPower}
                price={price}
                setPrice={setPrice}
                transmission={transmission}
                setTransmission={setTransmission}
              />
            </div>
            {carsData.cars && (
              <div className="flex-1 flex-col">
                <div style={{ borderBottom: "1px solid #e7e7e7" }}>
                  <h2 className="pt-2">
                    {searchSummary.pickupLocation}: {carsData.totalCars} cars
                    available
                  </h2>
                </div>
                <div className="mt-5">
                  {carsData.cars.map((car) => {
                    return (
                      <div key={car.id}>
                        <CarDetail car={car} />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default CarList;
