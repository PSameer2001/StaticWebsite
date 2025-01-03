import React from "react";
import StatGrid from "../stats/StatGrid";
import MapChart from "../charts/MapChart";
import VehicleChart from "../charts/VehicleChart";

const Body = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 mb-8">
        <StatGrid />
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <MapChart />
          <VehicleChart />
        </div>
      </div>
    </>
  );
};

export default Body;
