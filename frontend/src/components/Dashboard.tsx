import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Activity, AlertTriangle, Battery, Zap } from 'lucide-react';

const mockData = [
  { date: '2024-01', consumption: 320 },
  { date: '2024-02', consumption: 350 },
  { date: '2024-03', consumption: 280 },
];

export function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Energy Dashboard</h1>
        <div className="flex items-center space-x-2">
          <span className="flex items-center text-green-500">
            <Activity className="w-5 h-5 mr-1" />
            Live
          </span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-700">Current Usage</h3>
            <Zap className="w-6 h-6 text-yellow-500" />
          </div>
          <p className="text-3xl font-bold mt-2">2.4 kWh</p>
          <p className="text-sm text-gray-500">+5% from last hour</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-700">Efficiency Score</h3>
            <Battery className="w-6 h-6 text-green-500" />
          </div>
          <p className="text-3xl font-bold mt-2">85%</p>
          <p className="text-sm text-green-500">Good efficiency</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-700">Alerts</h3>
            <AlertTriangle className="w-6 h-6 text-orange-500" />
          </div>
          <p className="text-3xl font-bold mt-2">2</p>
          <p className="text-sm text-orange-500">Requires attention</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Consumption Trend</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="consumption" 
                stroke="#2563eb" 
                strokeWidth={2}
                dot={{ fill: '#2563eb' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}