import { useNavigate } from "react-router-dom";
import { GiGearStick } from "react-icons/gi";
import { IoIosColorPalette } from "react-icons/io";
import { differenceInDays } from "../utils";
import {
  BsFuelPump,
  BsCheck2,
  BsFillPersonFill,
  BsCalendar2Event,
} from "react-icons/bs";
import { GrDashboard } from "react-icons/gr";

const CarDetail = ({ car, showPrice }) => {
  const storedSummary = localStorage.getItem("searchSummary");
  const searchSummary = JSON.parse(storedSummary);

  const daysDifference = differenceInDays(
    searchSummary.startDate,
    searchSummary.endDate
  );

  const randomIndex = Math.ceil(Math.random() * 8);

  const navigate = useNavigate();

  const handleClick = (car) => {
    navigate("/deal");
    localStorage.setItem("dealData", JSON.stringify(car));
  };

  return (
    <>
      <div className="w-full">
        <div className="flex justify-start">
          <div className="bg-locations-hover p-2 rounded-lg text-base">
            {car.category}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={`../${randomIndex}.png`}
            alt="car"
            width="200px"
            height="150px"
          />
          <h3>
            {car.brand} {car.model}
          </h3>
          <div className="flex flex-col h-24 flex-wrap text-sm">
            <div className="p-1">
              <BsFillPersonFill className="w-4 h-4 mr-2" />
              {car.seatNumber} seats
            </div>
            <div className="flex items-center p-1">
              <GiGearStick className="w-4 h-4 mr-2" />
              {car.transmission}
            </div>
            <div className="flex items-center p-1">
              <BsCalendar2Event className="w-4 h-4 mr-2" />
              {car.year}
            </div>
            <div className="flex items-center p-1">
              <BsFuelPump className="w-4 h-4 mr-2" />
              {car.power}
            </div>
            <div className="flex items-center p-1">
              <IoIosColorPalette className="w-4 h-4 mr-2" />
              {car.color}
            </div>
            <div className="flex items-center p-1">
              <GrDashboard className="w-4 h-4 mr-2" />
              Unlimited
            </div>
          </div>

          {showPrice && (
            <div className="mt-2 flex flex-col items-center">
              <div className="text-sm">Price for {daysDifference} days</div>
              <div className="font-bold text-[24px] p-2">
                €{car.PricePerDay * daysDifference}{" "}
                <span className="text-xs">({car.PricePerDay}€ / day) </span>
              </div>
              <div className="flex items-center text-blue text-sm">
                <BsCheck2 className="w-5 h-5 to-blue mr-1" />
                <p>Free cancellation</p>
              </div>
              <button
                type="button"
                onClick={() => handleClick(car)}
                className="border-none bg-blue text-white text-base h-10 w-36 right-0 rounded-md cursor-pointer"
              >
                View deal
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CarDetail;
