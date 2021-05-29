import React, { useEffect, useState } from "react";
import "./App.css";
import { getFilteredLocations, getAllLocations } from "./API";

function App() {
  const [locations, setLocations] = useState<ILocation[]>([]);
  const [searchTxt, setSearchTxt] = useState("");

  //make api call for search locations
  useEffect(() => {
    //get Filtered locations when characters more than 2.
    if (searchTxt.length > 2) {
      getFilteredLocations(searchTxt)
        .then((locs: any) => {
          setLocations(locs.data);
        })
        .catch((err: Error) => console.log(err));
    }
    //get all locations when characters 2 or less.
    else {
      getAllLocations()
        .then((locs: any) => {
          setLocations(locs.data);
        })
        .catch((err: Error) => console.log(err));
    }
  }, [searchTxt]);

  //set/update search text on input change event
  const handleSearchTxtChange = (e: any) => {
    setSearchTxt(e.target.value);
  };

  return (
    <div className="App">
      <div className="row">
        <div className="col s12">
          <div className="card-panel teal">
            <input
              onChange={handleSearchTxtChange}
              placeholder="Search will be effective on more than 2 characters..."
            />
            {locations && locations.length > 0 && (
              <ul className="collection">
                {locations.map((loc, index) => {
                  return (
                    <li className="collection-item" key={index}>
                      <div className="row">
                        <div className="col s1">{index + 1}</div>
                        <div className="col s11">{loc.name}</div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
