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
        <div className="bg-[url(./bg.jpeg)] w-screen h-screen bg-cover bg-center overflow-hidden">
          <div className="relative max-w-6xl mx-auto top-[20%] flex justify-center">
            <div className="w-1/2 text-white mt-8">
              <div className="w-2/3">
                <h3>Plan your trip now</h3>
                <h1 className="leading-normal">
                  Unlock Your Adventure on Our Wheels with
                  <br />
                  <span className="text-red">Smooth </span>Ride,{" "}
                  <span className="text-red">Big</span> Save
                </h1>
                <p className="leading-8">
                  Rent the car of your dreams. Unbeatable prices, unlimited
                  miles, flexible pick-up options and much more.
                </p>
              </div>
            </div>
            <div className="w-1/2 min-h-1/2 bg-white border rounded-md py-2">
              <CarSearchForm />
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
