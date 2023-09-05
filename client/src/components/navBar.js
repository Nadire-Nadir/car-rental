import { useNavigate } from "react-router-dom";
import { FaCarSide } from "react-icons/fa";

const NavBar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="w-screen h-[90px] bg-black fixed top-0 left-0 text-white z-10">
      <div className="flex justify-between max-w-6xl mx-auto mt-[16.5px]">
        <button
          type="button"
          onClick={handleClick}
          className="bg-black border-none cursor-pointer"
        >
          <FaCarSide color="white" className="w-10 h-10" />
          <div className="font-bold text-sm text-white">CarRental</div>
        </button>
        <div className="flex items-center space-x-8 mx-3">
          <div>Home</div>
          <div>About</div>
          <div>Our Services</div>
          <div>Testimonials</div>
          <div>Contact</div>
        </div>
        <div className="flex items-center space-x-8">
          <button className="text-base border-none bg-black text-white cursor-pointer">
            Sign in
          </button>
          <button className="bg-orange text-white text-base p-3 h-12 rounded-md font-bold border-none cursor-pointer">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
