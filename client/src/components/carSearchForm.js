import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LocationsList from "./locationsList";

import { BiSearch } from "react-icons/bi";

const CarSearchForm = ({ setShowForm, setUpdate, update }) => {
  const today = new Date().toISOString().split("T")[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = tomorrowDate.toISOString().split("T")[0];

  const newDate = new Date();
  newDate.setDate(newDate.getDate() + 4);
  const inThreeDays = newDate.toISOString().split("T")[0];
  const currentTime = new Date();
  currentTime.setHours(currentTime.getHours() + 1);
  const minTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const storedSummary = localStorage.getItem("searchSummary");
  const searchSummary = JSON.parse(storedSummary);

  const [pickupLocationInput, setPickupLocationInput] = useState(
    searchSummary ? searchSummary.pickupLocation : ""
  );
  const [dropoffLocationInput, setDropoffLocationInput] = useState(
    searchSummary ? searchSummary.dropoffLocation : ""
  );
  const [pickupLocationId, setPickupLocationId] = useState(
    searchSummary ? searchSummary.pickupLocationId : undefined
  );
  const [dropoffLocationId, setDropoffLocationId] = useState(
    searchSummary ? searchSummary.dropoffLocationId : undefined
  );
  const [dropoffChecked, setDropoffChecked] = useState(false);
  const [dateData, setDateData] = useState({
    pickupDate: tomorrow,
    dropoffDate: inThreeDays,
    pickupTime: "10:00",
    dropoffTime: "10:00",
  });
  const [pLocationSelected, setPLocationSelected] = useState(
    searchSummary ? true : false
  );
  const [dLocationSelected, setDLocationSelected] = useState(
    searchSummary ? true : false
  );

  const navigate = useNavigate();

  const handleLocationChange = (event) => {
    const { name, value } = event.target;

    if (name === "pickup-location") {
      setPickupLocationInput(value);
      setPLocationSelected(false);
    } else {
      setDropoffLocationInput(value);
      setDLocationSelected(false);
    }
  };

  const pickupLocationSelect = (location) => {
    setPickupLocationId(location.id);
    setPickupLocationInput(location.name);
    setPLocationSelected(true);
  };

  const dropoffLocationSelect = (location) => {
    setDropoffLocationId(location.id);
    setDropoffLocationInput(location.name);
    setDLocationSelected(true);
  };

  const handleDateChange = (event) => {
    const { name, value } = event.target;
    setDateData((prevDateData) => ({
      ...prevDateData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newSearchData = JSON.stringify({
      pickupLocation: pickupLocationInput,
      pickupLocationId: pickupLocationId,
      dropoffLocation: dropoffChecked
        ? dropoffLocationInput
        : pickupLocationInput,
      dropoffLocationId: dropoffChecked ? dropoffLocationId : pickupLocationId,
      startDate: dateData.pickupDate,
      startTime: dateData.pickupTime,
      endDate: dateData.dropoffDate,
      endTime: dateData.dropoffTime,
    });

    navigate("/carlist");
    localStorage.setItem("searchSummary", newSearchData);

    if (setShowForm) {
      setShowForm(false);
    }

    if (setUpdate) {
      setUpdate(!update);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col m-6 space-y-2">
      <label className="font-bold text-lg">Pick-Up Location</label>
      <div className="relative">
        <input
          name="pickup-location"
          type="text"
          required
          value={pickupLocationInput}
          placeholder="Type a region, city or airport "
          onChange={handleLocationChange}
          className="border border-gray-500 box-border h-12 w-full pl-8 shadow-inner rounded-md focus:outline-none"
        />
        <BiSearch className="absolute left-2 h-5 w-5 top-4" />
        <div className="absolute shadow-custom w-full mt-1 rounded-md bg-white z-20 ">
          <LocationsList
            input={pickupLocationInput}
            onClick={pickupLocationSelect}
            setSelected={setPLocationSelected}
            selected={pLocationSelected}
          />
        </div>
      </div>
      {dropoffChecked && (
        <>
          <label className="flex flex-col font-bold text-lg">
            Drop-Off Location
          </label>
          <div className="relative">
            <input
              name="dropoff-location"
              type="text"
              value={dropoffLocationInput}
              placeholder="Type a region, city or airport "
              onChange={handleLocationChange}
              className="border border-gray-500 box-border pl-8 h-12 w-full shadow-inner rounded-md focus:outline-none"
            />
            <BiSearch className="absolute left-2 top-4 h-5 w-5" />
            <div className="absolute shadow-custom w-full mt-1 rounded-md bg-white z-20 ">
              <LocationsList
                input={dropoffLocationInput}
                onClick={dropoffLocationSelect}
                setSelected={setDLocationSelected}
                selected={dLocationSelected}
              />
            </div>
          </div>
        </>
      )}
      <div className="flex justify-end">
        <label>
          <input
            type="checkbox"
            checked={dropoffChecked}
            onChange={() => setDropoffChecked(!dropoffChecked)}
            className="mr-2 w-4 h-4"
          />
          Drop car off at different location
        </label>
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="font-bold text-lg">Pick-Up Date</label>
          <div className="relative mt-2">
            <input
              name="pickupDate"
              type="date"
              min={today}
              required
              value={dateData.pickupDate}
              onChange={handleDateChange}
              className="border border-gray-500 box-border h-12 rounded-md w-full px-2 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex-1">
          <label className="font-bold text-lg">Time</label>
          <div className="relative mt-2">
            <input
              name="pickupTime"
              type="time"
              required
              // minTime={dateData.pickupDate === today && minTime}
              value={dateData.pickupTime}
              onChange={handleDateChange}
              className="border border-gray-500 box-border h-12 rounded-md w-full px-2 focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="font-bold text-lg">Drop-Off Date</label>
          <div className="relative mt-2">
            <input
              name="dropoffDate"
              type="date"
              min={tomorrow}
              required
              value={dateData.dropoffDate}
              onChange={handleDateChange}
              className="border border-gray-500 box-border px-2 h-12 rounded-md w-full focus:outline-none"
            />
          </div>
        </div>

        <div className="flex-1">
          <label className="font-bold text-lg">Time</label>
          <div className="relative mt-2">
            <input
              name="dropoffTime"
              type="time"
              required
              value={dateData.dropoffTime}
              onChange={handleDateChange}
              className="border border-gray-500 box-border px-2 h-12 rounded-md w-full focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="pt-4">
        <button
          type="submit"
          className="bg-black text-white w-full h-12 rounded-md font-bold border-none cursor-pointer"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default CarSearchForm;
