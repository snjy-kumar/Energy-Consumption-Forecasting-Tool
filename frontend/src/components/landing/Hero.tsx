import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Transform Your Energy Management with AI
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Predict, monitor, and optimize your energy consumption with real-time insights 
              powered by artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/signup"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 flex items-center"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="#demo"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg hover:bg-blue-50"
              >
                Watch Demo
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80"
              alt="Smart Energy Management"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}