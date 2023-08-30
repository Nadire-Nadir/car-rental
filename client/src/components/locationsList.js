const LocationsList = ({ locations, onClick }) => {
  return (
    <ul className="list-none pl-0 my-0">
      {locations.map((location) => {
        return (
          <li
            key={location.id}
            value={location.id}
            onClick={() => onClick(location)}
            className="hover:bg-locations-hover cursor-pointer px-8 py-3"
          >
            <div className="text-sm">
              {location.name} {location.iata && <span>({location.iata})</span>}
            </div>
            <div className="text-xs font-light">
              {location.city}, {location.region}, {location.country}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default LocationsList;
