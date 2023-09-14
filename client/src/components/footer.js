import { BiSolidPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full bg-black">
      <div className="max-w-6xl mx-auto py-10 px-8 text-white flex flex-wrap">
        <div className="w-full lg:w-1/4 md:w-1/2 flex-initial flex justify-center">
          <div className="w-full sm:w-1/2 lg:w-full">
            <div className="font-bold">Car Rental</div>
            <div className="text-gray my-8 pr-8 leading-6">
              We offer a wide range of vehicles to meet all your driving needs.
              We have the perfect car for you.
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4 md:w-1/2 flex-initial flex justify-center">
          <div className="w-full sm:w-1/2 lg:w-full">
            <div className="font-bold">Company</div>
            <div className="flex flex-col space-y-4 text-gray my-8">
              <div>About us</div>
              <div>Partners</div>
              <div>Career</div>
              <div>How we work</div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4 md:w-1/2 flex-initial flex justify-center">
          <div className="w-full sm:w-1/2 lg:w-full">
            <div className="font-bold">Working Hours</div>
            <div className="flex flex-col space-y-4 text-gray my-8">
              <div>Mon - Fri: 9:00AM - 9:00PM</div>
              <div>Sat: 9:00AM - 19:00PM</div>
              <div>Sun: 9:00AM - 16:00PM</div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4 md:w-1/2 flex-initial flex justify-center">
          <div className="w-full sm:w-1/2 lg:w-full">
            <div className="font-bold">Contact</div>
            <div className="flex flex-col space-y-4 text-gray my-8">
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
    </div>
  );
};

export default Footer;
