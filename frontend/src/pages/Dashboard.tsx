import { Activity, Battery, AlertTriangle } from 'lucide-react';
import { ConsumptionChart } from '../components/ConsumptionChart';
import { StatCard } from '../components/StatCard';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Energy Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Current Usage"
          value="2.4 kWh"
          change="+5%"
          icon={Activity}
          color="blue"
        />
        <StatCard
          title="Efficiency Score"
          value="85%"
          change="Good efficiency"
          icon={Battery}
          color="green"
        />
        <StatCard
          title="Active Alerts"
          value="2"
          change="Requires attention"
          icon={AlertTriangle}
          color="orange"
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Consumption Trend</h2>
        <ConsumptionChart />
      </div>
    </div>
  );
}