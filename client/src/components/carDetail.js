import { useNavigate } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import { GiGearStickPattern } from "react-icons/gi";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoIosColorPalette } from "react-icons/io";
import { BsFuelPump, BsCheck2 } from "react-icons/bs";
import { GrDashboard } from "react-icons/gr";

const CarDetail = ({ car }) => {
  const storedSummary = localStorage.getItem("searchSummary");
  const searchSummary = JSON.parse(storedSummary);
  const dateStart = new Date(searchSummary.startDate);
  const dateEnd = new Date(searchSummary.endDate);

  const timeDifference = dateEnd.getTime() - dateStart.getTime();

  const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

  const randomIndex = Math.ceil(Math.random() * 9);

  const navigate = useNavigate();

  const handleClick = (car) => {
    navigate("/deal");
    localStorage.setItem("dealData", JSON.stringify(car));
  };

  return (
    <div
      className="rounded-md mt-4 h-52 p-6"
      style={{ border: "1px solid #e7e7e7" }}
    >
      <div className="flex">
        <div className="flex items-center w-1/4">
          <img
            src={`../${randomIndex}.png`}
            alt="car"
            width="160"
            height="100"
          />
        </div>
        <div className="w-2/4 ml-8">
          <div className="flex items-center pb-2">
            <h3>
              {car.brand} {car.model}
            </h3>
            <button className="h-10 border-none bg-locations-hover rounded-lg ml-4 text-base p-2">
              {car.category}
            </button>
          </div>
          <div className="flex flex-col h-24 flex-wrap">
            <div className="flex items-center mb-2">
              <GoPerson className="w-5 h-5 mr-2" />
              {car.seatNumber} seats
            </div>
            <div className="flex items-center mb-2">
              {car.transmission === "manual" && (
                <GiGearStickPattern className="w-5 h-5 mr-2" />
              )}
              {car.transmission === "automatic" && (
                <GiGearStickPattern className="w-5 h-5 mr-2" />
              )}
              {car.transmission}
            </div>
            <div className="flex items-center mb-2">
              <AiOutlineCalendar className="w-5 h-5 mr-2" />
              {car.year}
            </div>
            <div className="flex items-center mb-2">
              <BsFuelPump className="w-5 h-5 mr-2" />
              {car.power}
            </div>
            <div className="flex items-center mb-2">
              <IoIosColorPalette className="w-5 h-5 mr-2" />
              {car.color}
            </div>
            <div className="flex items-center mb-2">
              <GrDashboard className="w-5 h-5 mr-2" />
              Unlimited mileage
            </div>
          </div>
        </div>
        <div className="w-1/4 flex flex-col justify-end items-end ml-2 space-y-1">
          <div className="text-sm">Price for {daysDifference} days</div>
          <div className="font-bold text-[24px]">
            €{car.PricePerDay * daysDifference}{" "}
            <span className="text-xs">({car.PricePerDay}€ / day) </span>
          </div>
          <div className="flex items-center text-blue text-sm">
            <BsCheck2 className="w-5 h-5 to-blue mr-1" />
            <p>Free cancellation</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <button
          type="button"
          onClick={() => handleClick(car)}
          className="absolute border-none bg-blue text-white text-base h-10 w-36 right-0 rounded-md cursor-pointer"
        >
          View deal
        </button>
      </div>
    </div>
  );
};

export default CarDetail;
