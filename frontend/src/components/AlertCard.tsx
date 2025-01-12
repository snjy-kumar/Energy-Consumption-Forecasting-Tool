import React from 'react';
import { AlertTriangle, AlertCircle, Info } from 'lucide-react';

interface Props {
  title: string;
  description: string;
  severity: 'high' | 'medium' | 'low';
  timestamp: string;
}

export function AlertCard({ title, description, severity, timestamp }: Props) {
  const severityConfig = {
    high: { icon: AlertTriangle, color: 'text-red-600 bg-red-50 border-red-200' },
    medium: { icon: AlertCircle, color: 'text-orange-600 bg-orange-50 border-orange-200' },
    low: { icon: Info, color: 'text-blue-600 bg-blue-50 border-blue-200' }
  };

  const { icon: Icon, color } = severityConfig[severity];
  const date = new Date(timestamp).toLocaleString();

  return (
    <div className={`p-4 rounded-lg border ${color}`}>
      <div className="flex items-start">
        <Icon className="w-5 h-5 mt-0.5 mr-3" />
        <div className="flex-1">
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-sm opacity-80 mb-2">{description}</p>
          <time className="text-xs opacity-60">{date}</time>
        </div>
      </div>
    </div>
  );
}