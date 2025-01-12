import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Props {
  title: string;
  prediction: string;
  confidence: string;
  icon: LucideIcon;
}

export function PredictionCard({ title, prediction, confidence, icon: Icon }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-blue-600 mr-2" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="space-y-2">
        <p className="text-2xl font-bold">{prediction}</p>
        <p className="text-sm text-gray-600">
          Confidence: <span className="font-medium">{confidence}</span>
        </p>
      </div>
    </div>
  );
}