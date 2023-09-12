import { useNavigate } from "react-router-dom";
import { FaCarSide, FaBars } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed bg-black text-white top-0 left-0 z-10 w-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center py-2 px-4">
          <button
            type="button"
            onClick={handleClick}
            className="bg-black border-none cursor-pointer flex-col items-center"
          >
            <FaCarSide color="white" className="w-10 h-10" />
            <div className="font-bold text-sm ml-2 text-white lg:text-base">
              CarRental
            </div>
          </button>
          <div className="hidden items-center space-x-8 lg:flex">
            <div>Home</div>
            <div>About</div>
            <div>Our Services</div>
            <div>Testimonials</div>
            <div>Contact</div>
          </div>
          <div className="hidden items-center space-x-4 lg:flex">
            <button className="text-base border-none bg-black text-white cursor-pointer">
              Sign in
            </button>
            <button className="bg-orange text-white text-base p-2 rounded-lg font-bold border-none cursor-pointer lg:p-3 lg:h-12">
              Register
            </button>
          </div>
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={handleMobileMenu}
              className="text-white border-none bg-black cursor-pointer hover:bg-white hover:text-black p-2 rounded-md"
            >
              <FaBars className="w-6 h-6" />
            </button>
          </div>
        </div>
        {/* Mobile menu (hidden by default) */}
        {isMobileMenuOpen && (
          <ul className="list-none h-screen flex flex-col items-center bg-black space-y-8 pt-[20%] text-lg lg:hidden">
            <li>Home</li>
            <li>About</li>
            <li>Our Services</li>
            <li>Testimonials</li>
            <li>Contact</li>
            {/* <div className="lg:hidden flex flex-col items-center space-y-4"> */}
            <li>
              <button className="text-base border-none bg-black text-orange cursor-pointer">
                Sign in
              </button>
            </li>
            <li>
              <button className="bg-orange text-white text-base p-2 rounded-lg font-bold border-none cursor-pointer lg:p-3 lg:h-12">
                Register
              </button>
            </li>
            {/* </div> */}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
