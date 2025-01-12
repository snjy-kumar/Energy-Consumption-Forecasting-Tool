import React, { useState } from 'react';

export function ReportGenerator() {
  const [formData, setFormData] = useState({
    type: 'monthly',
    startDate: '',
    endDate: '',
    format: 'pdf'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle report generation
    console.log('Generate report:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Report Type
        </label>
        <select
          value={formData.type}
          onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
          className="w-full rounded-md border border-gray-300 px-3 py-2"
        >
          <option value="monthly">Monthly Summary</option>
          <option value="usage">Usage Analysis</option>
          <option value="devices">Device Performance</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Start Date
        </label>
        <input
          type="date"
          value={formData.startDate}
          onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
          className="w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          End Date
        </label>
        <input
          type="date"
          value={formData.endDate}
          onChange={(e) => setFormData(prev => ({ ...prev, endDate: e.target.value }))}
          className="w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Format
        </label>
        <select
          value={formData.format}
          onChange={(e) => setFormData(prev => ({ ...prev, format: e.target.value }))}
          className="w-full rounded-md border border-gray-300 px-3 py-2"
        >
          <option value="pdf">PDF</option>
          <option value="csv">CSV</option>
          <option value="excel">Excel</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Generate Report
      </button>
    </form>
  );
}