import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const mockData = [
  { month: 'Jan', baseline: 300, scenario1: 280, scenario2: 260 },
  { month: 'Feb', baseline: 320, scenario1: 290, scenario2: 270 },
  { month: 'Mar', baseline: 340, scenario1: 300, scenario2: 280 },
  { month: 'Apr', baseline: 360, scenario1: 310, scenario2: 290 },
];

export function ScenarioChart() {
  return (
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={mockData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="baseline" 
            stroke="#2563eb" 
            name="Current Usage"
          />
          <Line 
            type="monotone" 
            dataKey="scenario1" 
            stroke="#16a34a" 
            name="Optimized Usage"
          />
          <Line 
            type="monotone" 
            dataKey="scenario2" 
            stroke="#9333ea" 
            name="Solar Integration"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}