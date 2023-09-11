import { useNavigate } from "react-router-dom";
import CarDetail from "../components/carDetail";
import Footer from "../components/footer";
import NavBar from "../components/navBar";
import SearchSummary from "../components/searchSummary";
import { formatDate, differenceInDays } from "../utils";
import { BsCheck2Circle, BsCheck2 } from "react-icons/bs";
import { HiOutlineArrowLeft } from "react-icons/hi";

const DealDetail = () => {
  const navigate = useNavigate();
  const dealData = JSON.parse(localStorage.getItem("dealData"));
  const searchSummary = JSON.parse(localStorage.getItem("searchSummary"));

  const handleBack = () => {
    navigate("/carlist");
  };

  const textLine = (text) => {
    return (
      <div className="flex items-center">
        <BsCheck2 className="w-5 h-5 mr-2" color="#1273c4" />
        {text}
      </div>
    );
  };

  const daysDifference = differenceInDays(
    searchSummary.startDate,
    searchSummary.endDate
  );

  return (
    <div className="w-screen h-screen">
      <NavBar />
      <main className="pt-24">
        <div className="max-w-6xl mx-auto mb-8">
          <div className="mt-2">
            <SearchSummary />
          </div>
          <div className="mt-4">
            <button
              className="bg-white p-2 border-none rounded-md cursor-pointer text-blue hover:bg-locations-hover flex items-center"
              onClick={handleBack}
            >
              <HiOutlineArrowLeft className="w-4 h-4 mr-1" />
              Back to Search Result
            </button>
            <h2>Deal detail</h2>
          </div>

          <div className="flex space-x-16">
            <div
              className="w-[70%] flex-col p-8 rounded-md"
              style={{ border: "1px solid #e7e7e7" }}
            >
              <div
                className="rounded-md flex items-center bg-light-blue mb-4 py-4"
                style={{ border: "1px solid #1273c4" }}
              >
                <BsCheck2Circle className="w-5 h-5 mx-4" color="#1273c4" />
                Free cancellation up to 48 hours before pick-up
              </div>
              <CarDetail car={dealData} showPrice={false} />
              <div className="w-full py-4">
                <div className="flex items-center">
                  <div className="p-2 mr-2 bg-blue text-white text-[20px] rounded-md flex justify-center items-center">
                    10
                  </div>
                  <div>
                    <div>Exceptional</div>
                    <div className="text-xs">2 reviews</div>
                  </div>
                </div>
              </div>
              <div
                className="w-full pt-4"
                style={{ borderTop: "1px solid #e7e7e7" }}
              >
                <h3>Great choice!</h3>
                <div className="text-sm flex">
                  <div className="w-[50%] flex-col space-y-4">
                    {textLine("Customer rating: 10.0 / 10")}
                    {textLine("Most popular fuel policy")}
                    {textLine("Easy to find counter")}
                  </div>
                  <div className="w-[50%] flex-col space-y-4">
                    {textLine("EMost popular company here")}
                    {textLine("Short lines")}
                    {textLine("Free Cancellation")}
                  </div>
                </div>
              </div>
              <div
                className="w-full mt-8"
                style={{ borderTop: "1px solid #e7e7e7" }}
              >
                <h3>Included in the price</h3>
                <div className="text-sm flex">
                  <div className="w-[50%] flex-col space-y-4">
                    {textLine(
                      "Free cancellation up to 48 hours before pick-up"
                    )}
                    {textLine("Theft Protection with €200 excess")}
                  </div>
                  <div className="w-[50%] flex-col space-y-4">
                    {textLine("Collision Damage Waiver with €900 deductible")}
                    {textLine("Unlimited mileage")}
                  </div>
                </div>
              </div>
              <div
                className="w-full mt-8"
                style={{ borderTop: "1px solid #e7e7e7" }}
              >
                <h3>Extras</h3>
                <div className="text-sm">
                  <p>Child seats, additional drivers and more.</p>
                </div>
              </div>
              <div
                className="w-full mt-8 flex justify-end"
                style={{ borderTop: "1px solid #e7e7e7" }}
              >
                <button
                  type="button"
                  className="border-none bg-blue text-white text-base p-4 mt-4 rounded-md cursor-pointer"
                >
                  Continue to book
                </button>
              </div>
            </div>
            <div className="w-[30%] flex-col space-y-4">
              <div
                className="rounded-md px-8 pt-2 pb-8"
                style={{ border: "1px solid #e7e7e7" }}
              >
                <h3>Location & Date</h3>
                <div>
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-4"
                      style={{ border: "2px solid black" }}
                    />
                    <div className="flex-col space-y-2">
                      <div>{searchSummary.pickupLocation}</div>
                      <div className="text-sm">
                        {formatDate(searchSummary.startDate)},{" "}
                        {searchSummary.startTime}
                      </div>
                    </div>
                  </div>
                  <div
                    className="h-8 ml-[5px]"
                    style={{ borderLeft: "2px solid #e7e7e7" }}
                  />
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-4"
                      style={{ border: "2px solid black" }}
                    />
                    <div className="flex-col space-y-2">
                      <div>{searchSummary.dropoffLocation}</div>
                      <div className="text-sm">
                        {formatDate(searchSummary.endDate)},{" "}
                        {searchSummary.endTime}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="rounded-md px-8 pt-2 pb-4"
                style={{ border: "1px solid #e7e7e7" }}
              >
                <h3>Price Summary</h3>
                <div>
                  <div className="flex justify-between">
                    <p>Service fee</p>
                    <p>€12</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Car hire per day</p>
                    <p>€{dealData.PricePerDay}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Total hired days</p>
                    <p>{daysDifference} days</p>
                  </div>
                </div>
                <div
                  className="flex justify-between font-bold"
                  style={{ borderTop: "1px solid #e7e7e7" }}
                >
                  <p>Total Price</p>
                  <p>€{dealData.PricePerDay * daysDifference + 12}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DealDetail;
