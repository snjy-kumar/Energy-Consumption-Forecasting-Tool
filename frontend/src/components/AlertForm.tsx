import React, { useState } from 'react';

export function AlertForm() {
  const [formData, setFormData] = useState({
    type: 'consumption',
    threshold: '',
    frequency: 'immediate'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle alert creation
    console.log('Create alert:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Alert Type
        </label>
        <select
          value={formData.type}
          onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
          className="w-full rounded-md border border-gray-300 px-3 py-2"
        >
          <option value="consumption">High Consumption</option>
          <option value="pattern">Unusual Pattern</option>
          <option value="device">Device Status</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Threshold (kWh)
        </label>
        <input
          type="number"
          value={formData.threshold}
          onChange={(e) => setFormData(prev => ({ ...prev, threshold: e.target.value }))}
          className="w-full rounded-md border border-gray-300 px-3 py-2"
          placeholder="Enter threshold value"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Notification Frequency
        </label>
        <select
          value={formData.frequency}
          onChange={(e) => setFormData(prev => ({ ...prev, frequency: e.target.value }))}
          className="w-full rounded-md border border-gray-300 px-3 py-2"
        >
          <option value="immediate">Immediate</option>
          <option value="hourly">Hourly</option>
          <option value="daily">Daily</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Create Alert
      </button>
    </form>
  );
}