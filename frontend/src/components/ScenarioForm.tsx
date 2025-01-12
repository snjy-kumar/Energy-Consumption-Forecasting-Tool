import React, { useState } from 'react';

export function ScenarioForm() {
  const [formData, setFormData] = useState({
    name: '',
    type: 'optimization',
    reduction: '',
    duration: '6'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle scenario creation
    console.log('Create scenario:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Scenario Name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="w-full rounded-md border border-gray-300 px-3 py-2"
          placeholder="Enter scenario name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Scenario Type
        </label>
        <select
          value={formData.type}
          onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
          className="w-full rounded-md border border-gray-300 px-3 py-2"
        >
          <option value="optimization">Usage Optimization</option>
          <option value="solar">Solar Integration</option>
          <option value="devices">Smart Device Upgrade</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Expected Reduction (%)
        </label>
        <input
          type="number"
          value={formData.reduction}
          onChange={(e) => setFormData(prev => ({ ...prev, reduction: e.target.value }))}
          className="w-full rounded-md border border-gray-300 px-3 py-2"
          placeholder="Enter expected reduction"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Duration (months)
        </label>
        <select
          value={formData.duration}
          onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
          className="w-full rounded-md border border-gray-300 px-3 py-2"
        >
          <option value="3">3 months</option>
          <option value="6">6 months</option>
          <option value="12">12 months</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Create Scenario
      </button>
    </form>
  );
}