import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import locationService from "../services/locations";

const LocationsList = ({ input, onClick, setSelected, selected }) => {
  const [locading, setLoading] = useState(false);
  const [locations, setLocations] = useState([]);

  const fetchLocations = () => {
    if (input.length > 2 && !selected) {
      setLoading(true);
      locationService
        .getLocations({ params: { query: input } })
        .then((response) => {
          setLocations(response);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log("fetch locations error", error);
        });
    } else {
      setLocations([]);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, [input, selected]);

  const handleClick = (location) => {
    onClick(location);
    setSelected(true);
    setLocations([]);
  };

  return (
    <ul className="list-none pl-0 my-0">
      {locading ? (
        <AiOutlineLoading3Quarters className="h-5 w-5 ml-4 my-4" />
      ) : (
        locations.map((location) => {
          return (
            <li
              key={location.id}
              value={location.id}
              onClick={() => handleClick(location)}
              className="hover:bg-locations-hover cursor-pointer px-8 py-3"
            >
              <div className="text-sm">
                {location.name}{" "}
                {location.iata && <span>({location.iata})</span>}
              </div>
              <div className="text-xs font-light">
                {location.city}, {location.region}, {location.country}
              </div>
            </li>
          );
        })
      )}
    </ul>
  );
};

export default LocationsList;
