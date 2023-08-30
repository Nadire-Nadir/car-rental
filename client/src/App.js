import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CarList from "./pages/carList";
import { CarsProvider } from "./contexts/carsContext";

const App = () => {
  return (
    <div className="w-screen h-screen font-custom">
      <Routes>
        <Route
          path="/"
          element={
            <CarsProvider>
              <Home />
            </CarsProvider>
          }
        />
        <Route
          path="/carlist"
          element={
            <CarsProvider>
              <CarList />
            </CarsProvider>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
