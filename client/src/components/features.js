import { RiWallet3Fill, RiDashboard3Fill } from "react-icons/ri";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { BsShieldFillCheck } from "react-icons/bs";

const Features = () => {
  const featureItem = (icon, text1, text2) => {
    return (
      <div className="flex-1 w-full lg:w-1/4 md:w-1/2 sm:flex-initial flex flex-col items-center py-4">
        <div className="mb-4">{icon}</div>
        <div className="font-semibold text-[20px]">{text1}</div>
        <div className="text-sm mt-1 leading-7">{text2}</div>
      </div>
    );
  };
  return (
    <div className="bg-light-background">
      <div className="flex flex-wrap items-center max-w-6xl mx-auto py-8">
        {featureItem(
          <RiDashboard3Fill color="#f56700" className="w-10 h-10" />,
          "No Milleage Restrictions",
          "New cars with no hidden restrictions"
        )}
        {featureItem(
          <RiWallet3Fill color="#f56700" className="w-10 h-10" />,
          "No Extra Costs",
          "Rent a car with a peaceful mind"
        )}
        {featureItem(
          <LiaMoneyBillWaveSolid color="#f56700" className="w-10 h-10" />,
          "Affordable Prices",
          "Perfect deals for every budget"
        )}
        {featureItem(
          <BsShieldFillCheck color="#f56700" className="w-10 h-10" />,
          "Trustworthy Service",
          "With over 10 years of experience"
        )}
      </div>
    </div>
  );
};

export default Features;
