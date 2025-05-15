// "use client";

// import { locationsInfo } from "@/config/locationsInfo";
// import { useEffect, useRef, useState } from "react";
// import GoogleMapShowNearbyClinic from "../shared/GoogleMapShowNearbyClinic";

// const normalizeClinics = (clinics) =>
//   clinics.map((clinic) => ({
//     ...clinic,
//     searchIndex:
//       `${clinic.title} ${clinic.address} ${clinic.phone}`.toLowerCase(),
//     availableDays: clinic.availableSchedule.map((s) => s.day.toLowerCase()),
//   }));

// const normalizedClinics = normalizeClinics(locationsInfo);

// const FindOurLocation = () => {
//   const dropdownRef = useRef(null);
//   const [searchText, setSearchText] = useState("");
//   const [selectedDay, setSelectedDay] = useState("");
//   const [selectedClinic, setSelectedClinic] = useState(null);
//   const [filteredClinics, setFilteredClinics] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleClinicSelect = (clinic) => {
//     setSelectedClinic(clinic);
//     setSearchText(`${clinic.address}`);
//     setShowDropdown(false);
//   };

//   const handleFindNearest = () => {
//     setLoading(true);
//     setShowDropdown(true);
//     setSelectedClinic("");

//     const search = searchText.trim().toLowerCase();
//     const day = selectedDay.toLowerCase();

//     const matchedClinics = normalizedClinics.filter((clinic) => {
//       const matchesDay = !day || clinic.availableDays.includes(day);
//       const matchesSearch = !search || clinic.searchIndex.includes(search);
//       return matchesDay && matchesSearch;
//     });

//     setFilteredClinics(matchedClinics);
//     setLoading(false);

//     // if (matchedClinics.length > 0) {
//     //   const firstClinic = matchedClinics[0];
//     //   setSelectedClinic(firstClinic);
//     //   setSearchText(`${firstClinic.address}`);
//     // }
//   };

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setShowDropdown(false); // hide dropdown
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <section
//       className="relative py-16"
//       style={{
//         backgroundImage: "url('/assets/homepage/find-location-bg.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col items-center justify-between gap-5 lg:gap-8">
//           {/* Heading */}
//           <div className="w-full text-white max-w-[1000px] text-center mx-auto">
//             <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
//               Find our location near you.
//             </h2>

//             {/* Day Selector */}
//             <div className="flex flex-wrap justify-center gap-4 mb-6">
//               {[
//                 "Monday",
//                 "Tuesday",
//                 "Wednesday",
//                 "Thursday",
//                 "Friday",
//                 "Saturday",
//                 "Sunday",
//               ].map((day) => (
//                 <label
//                   key={day}
//                   className="flex items-center space-x-2 cursor-pointer"
//                 >
//                   <input
//                     type="radio"
//                     name="day"
//                     value={day}
//                     checked={selectedDay === day}
//                     onChange={(e) => setSelectedDay(e.target.value)}
//                     className="form-radio h-5 w-5 text-primary border-gray-300"
//                   />
//                   <span className="text-white">{day}</span>
//                 </label>
//               ))}
//               <button
//                 onClick={() => setSelectedDay("")}
//                 className="text-white underline text-sm"
//               >
//                 Clear
//               </button>
//             </div>

//             {/* Search Input */}
//             <div className="relative mb-6 w-full max-w-xl mx-auto">
//               <input
//                 type="text"
//                 placeholder="Enter your address or clinic name"
//                 value={searchText}
//                 onChange={(e) => setSearchText(e.target.value)}
//                 className="w-full bg-white text-gray-700 py-4 px-6 rounded-full shadow focus:outline-none"
//               />

//               {/* Search Results Dropdown */}
//               {showDropdown && (
//   <div
//     ref={dropdownRef}
//     className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg max-h-60 overflow-auto"
//   >
//     {loading ? (
//       <div className="p-4 text-center text-gray-500">Loading...</div>
//     ) : filteredClinics.length > 0 ? (
//       filteredClinics.map((clinic) => (
//         <div
//           key={clinic.id}
//           className="p-3 hover:bg-gray-100 cursor-pointer border-b text-gray-800"
//           onClick={() => handleClinicSelect(clinic)}
//         >
//           <div className="font-semibold">{clinic.title}</div>
//           <div className="text-sm">{clinic.address}</div>
//         </div>
//       ))
//     ) : (
//       <div className="p-4 text-center text-gray-500">No clinics found</div>
//     )}
//   </div>
// )}

//               {/* Find Button */}
//               <div className="group hover:scale-105 transition duration-300 text-center absolute right-0 top-1/2 transform -translate-y-1/2 z-40">
//                 <button
//                   onClick={handleFindNearest}
//                   className="relative overflow-hidden text-white font-normal text-md md:text-lg bg-primary px-8 md:px-20 py-4 rounded-full hover:bg-green-800 cursor-pointer"
//                 >
//                   <span className="relative z-10">Find Nearest Place</span>
//                   <span className="absolute inset-0 bg-secondary z-0 transform scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Google Map Component */}
//           <div className="w-full">
//             <GoogleMapShowNearbyClinic
//               clinics={locationsInfo}
//               selectedClinic={selectedClinic}
//               onClinicSelect={setSelectedClinic}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FindOurLocation;
"use client";

import { locationsInfo } from "@/config/locationsInfo";
import { useEffect, useRef, useState } from "react";
import GoogleMapShowNearbyClinic from "../shared/GoogleMapShowNearbyClinic";

const normalizeClinics = (clinics) =>
  clinics.map((clinic) => ({
    ...clinic,
    searchIndex:
      `${clinic.title} ${clinic.address} ${clinic.phone}`.toLowerCase(),
    availableDays: clinic.availableSchedule.map((s) => s.day.toLowerCase()),
  }));

const normalizedClinics = normalizeClinics(locationsInfo);

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const FindOurLocation = () => {
  const dropdownRef = useRef(null);
  const [searchText, setSearchText] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedClinic, setSelectedClinic] = useState(null);
  const [filteredClinics, setFilteredClinics] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClinicSelect = (clinic) => {
    setSelectedClinic(clinic);
    setSearchText(clinic.address);
    setShowDropdown(false);
  };

  const handleFindNearest = () => {
    if (!searchText.trim() && !selectedDay) {
      setFilteredClinics(normalizedClinics);
      setShowDropdown(true);
      return;
    }

    setLoading(true);
    setShowDropdown(true);
    setSelectedClinic(null);

    const search = searchText.trim().toLowerCase();
    const day = selectedDay.toLowerCase();

    const matchedClinics = normalizedClinics.filter((clinic) => {
      const matchesDay = !day || clinic.availableDays.includes(day);
      const matchesSearch = !search || clinic.searchIndex.includes(search);
      return matchesDay && matchesSearch;
    });

    setTimeout(() => {
      setFilteredClinics(matchedClinics);
      setLoading(false);
    }, 300);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleFindNearest();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!searchText.trim() && !selectedDay) {
      setFilteredClinics(normalizedClinics);
      return;
    }

    setLoading(true);
    setSelectedClinic(null);

    const search = searchText.trim().toLowerCase();
    const day = selectedDay.toLowerCase();

    const matchedClinics = normalizedClinics.filter((clinic) => {
      const matchesDay = !day || clinic.availableDays.includes(day);
      const matchesSearch = !search || clinic.searchIndex.includes(search);
      return matchesDay && matchesSearch;
    });

    setTimeout(() => {
      setFilteredClinics(matchedClinics);
      setLoading(false);
    }, 300);
  }, [selectedDay]);

  return (
    <section
      className="relative py-16"
      style={{
        backgroundImage: "url('/assets/homepage/find-location-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-5 lg:gap-8">
          {/* Heading */}
          <div className="w-full text-white max-w-[1000px] text-center mx-auto">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
              Find our location near you.
            </h2>

            {/* Day Selector */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {daysOfWeek.map((day) => (
                <label
                  key={day}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name="day"
                    value={day}
                    checked={selectedDay === day}
                    onChange={(e) => setSelectedDay(e.target.value)}
                    className="form-radio h-5 w-5 text-primary border-gray-300"
                  />
                  <span className="text-white">{day}</span>
                </label>
              ))}
              <button
                onClick={() => setSelectedDay("")}
                className="text-white underline text-sm"
              >
                Clear
              </button>
            </div>

            {/* Search Input */}
            <div className="relative mb-6 w-full max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Enter your address"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-white text-gray-700 py-4 px-6 rounded-full shadow focus:outline-none"
              />

              {/* Search Results Dropdown */}
              {showDropdown && (
                <div
                  ref={dropdownRef}
                  className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg max-h-60 overflow-auto"
                >
                  {loading ? (
                    <div className="p-4 text-center text-gray-500">
                      Loading...
                    </div>
                  ) : filteredClinics.length > 0 ? (
                    filteredClinics.map((clinic) => (
                      <div
                        key={clinic.id}
                        className="p-3 hover:bg-gray-100 cursor-pointer border-b text-gray-800"
                        onClick={() => handleClinicSelect(clinic)}
                      >
                        <div className="font-semibold">{clinic.title}</div>
                        <div className="text-sm">{clinic.address}</div>
                        <div className="text-xs text-gray-500">
                          {clinic.availableSchedule
                            .map((s) => `${s.day}: ${s.time}`)
                            .join(", ")}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-4 text-center text-gray-500">
                      No clinics found
                    </div>
                  )}
                </div>
              )}

              {/* Find Button */}
              <div className="group hover:scale-105 transition duration-300 text-center absolute right-0 top-1/2 transform -translate-y-1/2 z-40">
                <button
                  onClick={handleFindNearest}
                  className="relative overflow-hidden text-white font-normal text-md md:text-lg bg-primary px-8 md:px-20 py-4 rounded-full hover:bg-green-800 cursor-pointer"
                >
                  <span className="relative z-10">Find Nearest Place</span>
                  <span className="absolute inset-0 bg-secondary z-0 transform scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                </button>
              </div>
            </div>
          </div>

          {/* Google Map Component */}
          <div className="w-full">
            <GoogleMapShowNearbyClinic
              clinics={
                filteredClinics.length !== 0 ? filteredClinics : locationsInfo
              }
              selectedClinic={selectedClinic}
              onClinicSelect={setSelectedClinic}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindOurLocation;
