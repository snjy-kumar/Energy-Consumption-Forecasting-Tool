import React from 'react';
import { TrendingUp, Clock, Calendar } from 'lucide-react';
import { ConsumptionChart } from '../components/ConsumptionChart';
import { PredictionCard } from '../components/PredictionCard';

export default function PredictiveAnalytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Predictive Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PredictionCard
          title="24h Forecast"
          prediction="3.2 kWh"
          confidence="92%"
          icon={Clock}
        />
        <PredictionCard
          title="Weekly Trend"
          prediction="↑ 5%"
          confidence="88%"
          icon={TrendingUp}
        />
        <PredictionCard
          title="Monthly Projection"
          prediction="285 kWh"
          confidence="85%"
          icon={Calendar}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Historical vs Predicted</h2>
          <ConsumptionChart showPrediction />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Accuracy Analysis</h2>
          <ConsumptionChart type="accuracy" />
        </div>
      </div>
    </div>
  );
}