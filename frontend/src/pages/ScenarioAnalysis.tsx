import React from 'react';
import { ScenarioChart } from '../components/ScenarioChart';
import { ScenarioForm } from '../components/ScenarioForm';

export default function ScenarioAnalysis() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Scenario Analysis</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Scenario Comparison</h2>
          <ScenarioChart />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Create Scenario</h2>
          <ScenarioForm />
        </div>
      </div>
    </div>
  );
}