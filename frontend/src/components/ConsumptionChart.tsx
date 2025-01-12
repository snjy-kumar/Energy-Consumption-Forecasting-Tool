import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface Props {
  showPrediction?: boolean;
  type?: 'standard' | 'accuracy';
}

const mockData = [
  { date: '2024-01', consumption: 320, predicted: 315 },
  { date: '2024-02', consumption: 350, predicted: 340 },
  { date: '2024-03', consumption: 280, predicted: 290 },
];

export function ConsumptionChart({ showPrediction = false, type = 'standard' }: Props) {
  return (
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
          {showPrediction && (
            <Line
              type="monotone"
              dataKey="predicted"
              stroke="#dc2626"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: '#dc2626' }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}