import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart2, Bell, FileText, GitBranch, 
  Cpu, TrendingUp, Zap, ArrowRight 
} from 'lucide-react';

const features = [
  {
    icon: BarChart2,
    title: 'Dashboard',
    description: 'Get a comprehensive overview of your energy consumption',
    link: '/app'
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'AI-powered forecasting of energy usage patterns',
    link: '/app/analytics'
  },
  {
    icon: Bell,
    title: 'Smart Alerts',
    description: 'Real-time notifications for unusual consumption',
    link: '/app/alerts'
  },
  {
    icon: FileText,
    title: 'Detailed Reports',
    description: 'Generate comprehensive energy usage reports',
    link: '/app/reports'
  },
  {
    icon: GitBranch,
    title: 'Scenario Analysis',
    description: 'Explore different energy usage scenarios',
    link: '/app/scenarios'
  },
  {
    icon: Cpu,
    title: 'Smart Device Integration',
    description: 'Connect and monitor all your smart devices',
    link: '/app/devices'
  }
];

export default function Features() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">EnergyForecast</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-blue-600 hover:text-blue-700">Login</Link>
              <Link 
                to="/signup" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Powerful Features for Energy Management
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md">
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Link 
                to={feature.link}
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}