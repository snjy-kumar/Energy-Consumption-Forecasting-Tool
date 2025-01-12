 
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <Zap className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">EnergyForecast</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-gray-600 hover:text-gray-800">Features</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-gray-800">Pricing</Link>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-800">Testimonials</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
            
            <Link to="/login" className="text-blue-600 hover:text-white hover:bg-blue-600 px-4 py-2 rounded-lg">Login</Link>  
            <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}