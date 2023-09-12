import CarSearchForm from "../components/carSearchForm";
import Features from "../components/features";
import Footer from "../components/footer";
import NavBar from "../components/navBar";

const Home = () => {
  return (
    <>
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      <NavBar />
      <main>
        <div className="bg-[url(./bg.jpeg)] w-screen sm:h-screen bg-cover bg-center">
          <div className="max-w-6xl mx-auto h-full flex items-center py-10 sm:mt-0 mt-[81px]">
            <div className="flex flex-col md:flex-row px-8 justify-between lg:space-x-10">
              <div className="text-white pr-2 lg:w-1/2 md:w-1/3">
                <h3>Plan your trip now</h3>
                <h1 className="leading-normal">
                  Unlock Your Adventure on Our Wheels with <br />
                  <span className="text-orange">Smooth </span>Ride,
                  <span className="text-orange">Big</span> Save
                </h1>
                <p className="leading-8">
                  Rent the car of your dreams. Unbeatable prices, unlimited
                  miles, flexible pick-up options and much more.
                </p>
              </div>
              <div className="lg:w-1/2 md:w-2/3">
                <div className="bg-white border rounded-md py-2">
                  <CarSearchForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Features />
        <Footer />
      </main>
    </>
  );
};

export default Home;
