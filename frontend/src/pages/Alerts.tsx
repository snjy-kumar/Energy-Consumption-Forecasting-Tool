import React from 'react';
import { AlertCard } from '../components/AlertCard';
import { AlertForm } from '../components/AlertForm';

export default function Alerts() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Alerts & Notifications</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Create Alert
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Active Alerts</h2>
          <AlertCard
            title="High Consumption"
            description="Usage exceeded daily threshold"
            severity="high"
            timestamp="2024-03-10T14:30:00"
          />
          <AlertCard
            title="Unusual Pattern"
            description="Unexpected usage pattern detected"
            severity="medium"
            timestamp="2024-03-10T12:15:00"
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Configure New Alert</h2>
          <AlertForm />
        </div>
      </div>
    </div>
  );
}