"use client";

import {
  Circle,
  GoogleMap,
  Marker,
  OverlayView,
  useLoadScript,
} from "@react-google-maps/api";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuClock, LuPhone } from "react-icons/lu";

const mapContainerStyle = {
  width: "100%",
  height: "600px",
  overflow: "hidden",
  borderRadius: "10px",
};

const mapStyles = [
  {
    featureType: "all",
    elementType: "all",
    // stylers: [{ saturation: -100 }, { gamma: 0.8 }],
  },
];

export default function GoogleMapShowNearbyClinic({
  clinics,
  selectedClinic,
  onClinicSelect,
}) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "",
    libraries: ["places", "geometry"],
  });

  const mapRef = useRef(null);
  const [highlightedClinic, setHighlightedClinic] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  const defaultCenter = { lat: 27.994402, lng: -81.760254 };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
  }, []);

  const getDistance = (lat1, lng1, lat2, lng2) => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLng / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const handleClinicClick = (clinic) => {
    setHighlightedClinic(clinic);
    onClinicSelect?.(clinic);

    if (mapRef.current) {
      // Smoothly pan the map to the selected clinic
      setTimeout(() => {
        mapRef.current.panTo({
          lat: clinic.latitude,
          lng: clinic.longitude,
        });
      }, 100);
    }
  };

  useEffect(() => {
    if (selectedClinic && mapRef.current) {
      setHighlightedClinic(selectedClinic);
      setTimeout(() => {
        mapRef.current.panTo({
          lat: selectedClinic.latitude,
          lng: selectedClinic.longitude,
        });
      }, 100);
    }
  }, [selectedClinic]);

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <div className="overflow-hidden transition-opacity duration-700 opacity-100">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={
          selectedClinic
            ? { lat: selectedClinic.latitude, lng: selectedClinic.longitude }
            : { lat: 28.0072616, lng: -82.1227991 }
        }
        zoom={selectedClinic ? 14 : 10}
        onLoad={(map) => {
          mapRef.current = map;
        }}
        options={{
          styles: mapStyles,
          disableDefaultUI: true,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          gestureHandling: "greedy",
          clickableIcons: false,
          backgroundColor: "#f9fafb",
        }}
      >
        {userLocation && (
          <Marker
            position={userLocation}
            icon={{
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 8,
              fillColor: "#4285F4",
              fillOpacity: 1,
              strokeWeight: 2,
              strokeColor: "white",
            }}
          />
        )}

        {highlightedClinic && (
          <Circle
            center={{
              lat: highlightedClinic.latitude,
              lng: highlightedClinic.longitude,
            }}
            radius={500}
            options={{
              strokeColor: "#4F46E5",
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: "#4F46E5",
              fillOpacity: 0.35,
            }}
          />
        )}

        {clinics.map((clinic) => {
          const isSelected = highlightedClinic?.id === clinic.id;
          const isNearby =
            userLocation &&
            getDistance(
              clinic.latitude,
              clinic.longitude,
              userLocation.lat,
              userLocation.lng
            ) < 10;

          return (
            <OverlayView
              key={clinic.id}
              position={{ lat: clinic.latitude, lng: clinic.longitude }}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <div className="relative w-[200px]">
                <div
                  className={clsx(
                    "rounded p-1 flex items-center justify-center shadow-lg border-2 transition-transform duration-300 transform cursor-pointer overflow-hidden",
                    {
                      "border-primary bg-blue-100 scale-110 z-50": isSelected,
                      "border-purple-500 bg-purple-100":
                        isNearby && !isSelected,
                      "border-gray-300 bg-white": !isSelected && !isNearby,
                    }
                  )}
                  onClick={() => handleClinicClick(clinic)}
                >
                  <div className="flex items-center space-x-2 w-[200px] h-auto">
                    <Image
                      src={clinic.image}
                      alt="Clinic"
                      width={60}
                      height={60}
                      className="w-[60px] h-[60px] object-cover rounded-md"
                    />
                    <h3 className="font-bold text-sm">{clinic.title}</h3>
                  </div>
                </div>

                {isSelected && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white p-3 rounded shadow-lg z-50 min-w-[220px]">
                    <div className="flex items-start gap-1">
                      <div className="w-5 h-5">
                        <IoLocationOutline className="text-red-400 size-5 mt-[2px]" />
                      </div>
                      <p className="text-sm font-semibold">{clinic.address}</p>
                    </div>
                    <div className="flex items-start gap-2 mt-2">
                      <div className="w-5 h-5">
                        <LuPhone className="text-red-400 size-4 mt-[1px]" />
                      </div>
                      <p className="text-sm font-semibold">{clinic.phone}</p>
                    </div>
                    <ul className="mt-2 space-y-1">
                      {clinic.availableSchedule.map((schedule, index) => (
                        <li key={index} className="flex items-start gap-1">
                          <div className="w-5 h-5">
                            <LuClock className="text-red-400 size-4 mt-[1px]" />
                          </div>
                          <p className="text-xs font-semibold">
                            {schedule.day} - {schedule.time.join(", ")}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </OverlayView>
          );
        })}
      </GoogleMap>
    </div>
  );
}
