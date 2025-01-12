import React from 'react';
import { FileText, Download, Eye } from 'lucide-react';

const mockReports = [
  {
    id: 1,
    title: 'Monthly Energy Report',
    date: '2024-03-01',
    type: 'Monthly Summary'
  },
  {
    id: 2,
    title: 'Usage Patterns Analysis',
    date: '2024-02-28',
    type: 'Analytics'
  },
  {
    id: 3,
    title: 'Device Efficiency Report',
    date: '2024-02-25',
    type: 'Device Analysis'
  }
];

export function ReportsList() {
  return (
    <div className="space-y-4">
      {mockReports.map((report) => (
        <div key={report.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <FileText className="w-5 h-5 text-blue-600 mr-3" />
            <div>
              <h4 className="font-medium">{report.title}</h4>
              <p className="text-sm text-gray-600">
                {report.type} • {new Date(report.date).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 text-gray-600 hover:text-blue-600">
              <Eye className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-600">
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}