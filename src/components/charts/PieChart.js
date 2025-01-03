import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const PieChartDisplay = ({data, width, height}) => {
  return (
    <PieChart
      series={[
        {
          data: data,
        },
      ]}
      width={width}
      height={height}
    />
  );
};

export default PieChartDisplay;
