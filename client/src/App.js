import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CarList from "./pages/carList";
import DealDetail from "./pages/dealDetail";

const App = () => {
  return (
    <div className="w-screen h-screen font-custom">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carlist" element={<CarList />} />
        <Route path="/deal" element={<DealDetail />} />
      </Routes>
    </div>
  );
};

export default App;
