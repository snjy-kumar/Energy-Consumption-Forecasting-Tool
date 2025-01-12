import React from 'react';
import { DeviceCard } from '../components/DeviceCard';
import { DeviceUsageChart } from '../components/DeviceUsageChart';

export default function SmartDevices() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Smart Devices</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Device
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DeviceCard
          name="Smart Thermostat"
          status="active"
          consumption="0.8 kWh"
          lastUpdate="2 mins ago"
        />
        <DeviceCard
          name="EV Charger"
          status="idle"
          consumption="0.0 kWh"
          lastUpdate="15 mins ago"
        />
        <DeviceCard
          name="Solar Inverter"
          status="active"
          consumption="-2.1 kWh"
          lastUpdate="1 min ago"
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Device Usage Overview</h2>
        <DeviceUsageChart />
      </div>
    </div>
  );
}