import React from "react";
import StatGrid from "../stats/StatGrid";
import MapChart from "../charts/MapChart";
import VehicleChart from "../charts/VehicleChart";

const Body = () => {
  return (
    <>
      <StatGrid />
      <div className="grid grid-cols-2 gap-2 mt-6">
        <MapChart />
        <VehicleChart />
      </div>
    </>
  );
};

export default Body;
