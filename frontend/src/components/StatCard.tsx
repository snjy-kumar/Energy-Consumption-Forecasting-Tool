import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Props {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  color: string;
}

export function StatCard({ title, value, change, icon: Icon, color }: Props) {
  const colorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    orange: 'text-orange-600',
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <Icon className={`w-6 h-6 ${colorClasses[color as keyof typeof colorClasses]}`} />
      </div>
      <p className="text-3xl font-bold mt-2">{value}</p>
      <p className={`text-sm ${colorClasses[color as keyof typeof colorClasses]}`}>{change}</p>
    </div>
  );
}