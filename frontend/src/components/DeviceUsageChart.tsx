import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const mockData = [
  { device: 'Thermostat', consumption: 0.8 },
  { device: 'EV Charger', consumption: 2.1 },
  { device: 'Solar Inverter', consumption: -2.1 },
  { device: 'Smart Lights', consumption: 0.3 },
  { device: 'HVAC', consumption: 1.5 }
];

export function DeviceUsageChart() {
  return (
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={mockData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="device" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar 
            dataKey="consumption" 
            fill="#2563eb"
            name="Energy Consumption (kWh)"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}