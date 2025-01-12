import React from 'react';
import { Power, Clock } from 'lucide-react';

interface Props {
  name: string;
  status: 'active' | 'idle' | 'offline';
  consumption: string;
  lastUpdate: string;
}

export function DeviceCard({ name, status, consumption, lastUpdate }: Props) {
  const statusColors = {
    active: 'text-green-600 bg-green-50',
    idle: 'text-orange-600 bg-orange-50',
    offline: 'text-gray-600 bg-gray-50'
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <span className={`px-2 py-1 rounded-full text-sm ${statusColors[status]}`}>
          {status}
        </span>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center">
          <Power className="w-5 h-5 text-blue-600 mr-2" />
          <span className="text-gray-600">
            Consumption: <strong>{consumption}</strong>
          </span>
        </div>
        
        <div className="flex items-center">
          <Clock className="w-5 h-5 text-blue-600 mr-2" />
          <span className="text-sm text-gray-500">
            Last updated: {lastUpdate}
          </span>
        </div>
      </div>
    </div>
  );
}