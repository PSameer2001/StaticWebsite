import React from 'react';

const MapChart = () => {
  return (
    <div className="bg-white p-4 rounded-lg">
      <h3 className="text-gray-600 text-sm font-medium mb-4">
        India <span className="text-gray-400 mx-1">›</span> Statewise App Registered Users Count
      </h3>
      <div className="aspect-w-4 aspect-h-3 bg-gray-50 rounded-lg">
        {/* Map placeholder - would use a real map library in production */}
        <div className="flex items-center justify-center text-gray-400">
          India Map View
        </div>
      </div>
    </div>
  );
};

export default MapChart;