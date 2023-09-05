import Footer from "../components/footer";
import NavBar from "../components/navBar";

const DealDetail = () => {
  const dealData = JSON.parse(localStorage.getItem("dealData"));
  console.log("car", dealData);
  return (
    <div className="w-screen h-screen">
      <NavBar />
      <main className="pt-16">
        <div className="max-w-6xl mx-auto h-screen mb-8">coming soon ...</div>
      </main>
      <Footer />
    </div>
  );
};

export default DealDetail;
