import { Outlet, NavLink } from 'react-router-dom';
import { Zap, BarChart2, Bell, FileText, GitBranch, Cpu } from 'lucide-react';

const navItems = [
  { to: '/app', icon: Zap, label: 'Dashboard' },
  { to: '/app/analytics', icon: BarChart2, label: 'Predictive Analytics' },
  { to: '/app/alerts', icon: Bell, label: 'Alerts' },
  { to: '/app/reports', icon: FileText, label: 'Reports' },
  { to: '/app/scenarios', icon: GitBranch, label: 'Scenarios' },
  { to: '/app/devices', icon: Cpu, label: 'Smart Devices' },
];

function Layout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <nav className="w-64 bg-white shadow-lg">
        <div className="p-4 border-b">
          <div className="flex items-center">
            <Zap className="w-8 h-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">EnergyForecast</span>
          </div>
        </div>
        <div className="p-4">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center p-2 rounded-lg mb-1 ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              <Icon className="w-5 h-5 mr-3" />
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;