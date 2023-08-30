import { FaCarSide } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="w-screen h-[64px] bg-black fixed top-0 left-0 text-white z-10">
      <div className="flex justify-between max-w-6xl mx-auto mt-[3px]">
        <button className="bg-black border-none cursor-pointer">
          <FaCarSide color="white" className="w-8 h-8" />
          <div className="font-bold text-sm text-white">CarRental</div>
        </button>
        <div className="flex items-center space-x-4 mx-3">
          <div>EUR</div>
          <div>Language</div>
          <div>Manage booking</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
