import CarDetail from "../components/carDetail";
import Filter from "../components/filter";
import NavBar from "../components/navBar";
import SearchSummary from "../components/searchSummary";
import { useCars } from "../contexts/carsContext";
import Footer from "../components/footer";

const CarList = () => {
  const { carsData } = useCars();

  console.log("cars in context", carsData);
  const storedSummary = localStorage.getItem("searchSummary");
  const searchSummary = JSON.parse(storedSummary);

  console.log("summary", searchSummary);

  return (
    <div className="w-screen h-screen">
      <NavBar />
      <main className="pt-16">
        <div className="max-w-6xl mx-auto mb-8">
          <div className="mt-2">
            <SearchSummary />
          </div>

          <div className="mt-5 flex space-x-6">
            <div className="w-1/4 flex-col">
              <Filter />
            </div>
            {carsData.cars && (
              <div className="flex-1 flex-col">
                <div style={{ borderBottom: "1px solid #e7e7e7" }}>
                  <h2 className="pt-2">
                    {searchSummary.pickupLocation}: {carsData.cars.length} cars
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
