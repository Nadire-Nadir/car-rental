import { RiWallet3Fill, RiDashboard3Fill } from "react-icons/ri";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { BsShieldFillCheck } from "react-icons/bs";

const Features = () => {
  const featureItem = (icon, text1, text2) => {
    return (
      <div className="flex-1 flex flex-col items-center">
        <div className="py-3 mb-4">{icon}</div>
        <div className="font-semibold text-[20px]">{text1}</div>
        <div className="text-sm mt-1 leading-7">{text2}</div>
      </div>
    );
  };
  return (
    <div className="bg-light-background">
      <div className="flex items-center max-w-6xl mx-auto py-16">
        {featureItem(
          <RiDashboard3Fill color="#BB191B" className="w-10 h-10" />,
          "No Milleage Restrictions",
          "New cars with no hidden restrictions"
        )}
        {featureItem(
          <RiWallet3Fill color="#BB191B" className="w-10 h-10" />,
          "No Extra Costs",
          "Rent a car with a peaceful mind"
        )}
        {featureItem(
          <LiaMoneyBillWaveSolid color="#BB191B" className="w-10 h-10" />,
          "Affordable Prices",
          "Perfect deals for every budget"
        )}
        {featureItem(
          <BsShieldFillCheck color="#BB191B" className="w-10 h-10" />,
          "Trustworthy Service",
          "With over 10 years of experience"
        )}
      </div>
    </div>
  );
};

export default Features;
