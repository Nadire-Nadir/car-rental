import { useEffect, useState } from "react";
import carService from "../services/cars";
import { MdOutlineFilterList } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

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
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
    setLoading(true);
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
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, [category, price, power, transmission, updateSearch]);

  const handleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <>
      <NavBar />
      <main className="w-screen">
        <div className="max-w-6xl mx-auto p-8 mt-[81px]">
          <div>
            <div className="mt-2">
              <SearchSummary
                setUpdateSearch={setUpdateSearch}
                updateSearch={updateSearch}
              />
            </div>
            <div
              className="lg:hidden w-full rounded-md flex justify-center mt-4"
              style={{ border: "1px solid #e7e7e7" }}
            >
              <div className="m-2">
                <button
                  type="button"
                  onClick={handleFilter}
                  className="border-none bg-white cursor-pointer hover:bg-light-blue py-2 px-16 rounded-md flex items-center font-bold"
                >
                  <MdOutlineFilterList className="w-5 h-5 mr-2" /> Filter
                </button>
              </div>
            </div>

            <div className="mt-5 flex">
              <div
                className="hidden lg:block w-1/5 flex-col rounded-md mt-5 h-fit"
                style={{ border: "1px solid #e7e7e7" }}
              >
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
              {loading && (
                <div className="w-full flex justify-center mt-8">
                  <AiOutlineLoading3Quarters className="h-8 w-8 animate-spin" />
                </div>
              )}
              {carsData.cars && (
                <div className="min-h-screen flex-1 flex-col lg:pl-8">
                  <div style={{ borderBottom: "1px solid #e7e7e7" }}>
                    <h2 className="pt-2">
                      {searchSummary.pickupLocation}: {carsData.totalCars} cars
                      available
                    </h2>
                  </div>
                  <div className="mt-5 flex flex-wrap justify-between">
                    {carsData.cars.map((car) => {
                      return (
                        <div
                          key={car.id}
                          className="rounded-md lg:w-[30%] md:w-[45%] w-[100%] px-2 py-4 my-2"
                          style={{ border: "1px solid #e7e7e7" }}
                        >
                          <CarDetail car={car} showPrice={true} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {isFilterOpen && (
          <div className="lg:hidden absolute top-0 bg-white w-screen z-50 h-screen overflow-scroll">
            <div className="py-4 px-8">
              <div className="flex justify-end">
                <button
                  className="border-none bg-white text-[24px] cursor-pointer hover:bg-locations-hover"
                  onClick={() => setIsFilterOpen(false)}
                >
                  <GrClose className="w-4 h-4" />
                </button>
              </div>
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
              <div style={{ borderTop: "1px solid #e7e7e7" }}>
                <div className="flex justify-between items-center">
                  <h3>{carsData.totalCars} cars available</h3>
                  <button
                    type="button"
                    className="border-none bg-blue text-white text-base p-4 mt-4 rounded-md cursor-pointer"
                    onClick={() => setIsFilterOpen(false)}
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default CarList;
