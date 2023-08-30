import { BiSolidPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-screen bg-black">
      <div className="max-w-6xl mx-auto text-white flex space-x-24 py-16">
        <div className="flex-1">
          <div className="font-bold">Car Rental</div>
          <div className="text-gray mt-6 leading-6">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </div>
        </div>
        <div className="flex-1 ">
          <div className="font-bold">Company</div>
          <div className="flex flex-col space-y-4 text-gray mt-6">
            <div>About us</div>
            <div>Partners</div>
            <div>Career</div>
            <div>How we work</div>
          </div>
        </div>
        <div className="flex-1">
          <div className="font-bold">Working Hours</div>
          <div className="flex flex-col space-y-4 text-gray mt-6">
            <div>Mon - Fri: 9:00AM - 9:00PM</div>
            <div>Sat: 9:00AM - 19:00PM</div>
            <div>Sun: 9:00AM - 16:00PM</div>
          </div>
        </div>
        <div className="flex-1">
          <div className="font-bold">Contact</div>
          <div className="flex flex-col space-y-4 text-gray mt-6">
            <div className="flex items-center">
              <BiSolidPhone color="#C0C0C0" className="w-5 h-5 mr-2" />
              (+358)-1234567890
            </div>
            <div className="flex items-center">
              <MdEmail color="#C0C0C0" className="w-5 h-5 mr-2" />
              contact@carrental.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
