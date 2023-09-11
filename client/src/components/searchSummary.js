import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import CarSearchForm from "./carSearchForm";
import { GrClose } from "react-icons/gr";
import { formatDate } from "../utils";

const SearchSummary = ({ setUpdateSearch, updateSearch }) => {
  const [showForm, setShowForm] = useState(false);
  const searchSummary = JSON.parse(localStorage.getItem("searchSummary"));

  return (
    <div className="rounded-md border" style={{ border: "2px solid orange" }}>
      {showForm ? (
        <div className="relative">
          <div>
            <p className="ml-6 font-bold">Edit search</p>
            <button
              className="absolute right-6 top-0 border-none bg-white text-[24px] cursor-pointer hover:bg-locations-hover"
              onClick={() => setShowForm(!showForm)}
            >
              <GrClose className="w-4 h-4" />
            </button>
          </div>
          <CarSearchForm
            setShowForm={setShowForm}
            showForm={showForm}
            setUpdate={setUpdateSearch}
            update={updateSearch}
          />
        </div>
      ) : (
        <div className="px-4 flex justify-between items-center">
          <div className="flex flex-row items-center space-x-4">
            <div className="leading-3">
              <p className="font-bold">{searchSummary.pickupLocation}</p>
              <p className="text-sm">
                {formatDate(searchSummary.startDate)}, {searchSummary.startTime}
              </p>
            </div>
            <div>
              <IoIosArrowForward className="h-5 w-5" />
            </div>
            <div className="leading-3">
              <p className="font-bold">{searchSummary.dropoffLocation} </p>
              <p className="text-sm">
                {formatDate(searchSummary.endDate)}, {searchSummary.endTime}
              </p>
            </div>
          </div>
          <button
            type="button"
            className="border-none bg-blue text-white h-10 px-4 rounded-md font-bold cursor-pointer"
            onClick={() => setShowForm(!showForm)}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchSummary;
