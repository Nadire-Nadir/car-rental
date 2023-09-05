import { useNavigate } from "react-router-dom";
import CarDetail from "../components/carDetail";
import Footer from "../components/footer";
import NavBar from "../components/navBar";
import SearchSummary from "../components/searchSummary";

const DealDetail = () => {
  const navigate = useNavigate();
  const dealData = JSON.parse(localStorage.getItem("dealData"));
  const searchSummary = JSON.parse(localStorage.getItem("searchSummary"));
  console.log("car", dealData);

  const handleBack = () => {
    navigate("/carlist");
  };
  return (
    <div className="w-screen h-screen">
      <NavBar />
      <main className="pt-24">
        <div className="max-w-6xl mx-auto h-screen mb-8">
          <div className="mt-2">
            <SearchSummary />
          </div>
          <h2>Working on it, coming soon ...</h2>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DealDetail;
