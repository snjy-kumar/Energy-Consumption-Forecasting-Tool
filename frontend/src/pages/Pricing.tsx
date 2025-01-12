import React, { useState } from 'react';
import { Cloud, BarChart, Power } from 'lucide-react';

const PricingSection = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Default middle card active

  const pricingPlans = [
    {
      name: 'Basic Plan',
      price: '$29/month',
      features: [
        'Basic Consumption Tracking',
        'Daily Energy Reports',
        'Email Notifications',
      ],
      description: 'Suitable for small homes and individual users.',
      icon: <Cloud size={30} className="text-blue-500" />,
    },
    {
      name: 'Standard Plan',
      price: '$59/month',
      features: [
        'Advanced Consumption Tracking',
        'Weekly Energy Reports',
        'Energy Efficiency Predictions',
        'Priority Support',
      ],
      description: 'Great for small businesses and office spaces.',
      icon: <BarChart size={30} className="text-yellow-500" />,
    },
    {
      name: 'Enterprise Plan',
      price: '$199/month',
      features: [
        'Real-Time Energy Monitoring',
        'Monthly Energy Optimization Reports',
        'Predictive Analytics for Consumption',
        'Dedicated Support',
      ],
      description: 'For large enterprises with high energy consumption.',
      icon: <Power size={30} className="text-green-500" />,
    },
  ];

  return (
    <div className="py-16 px-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-12">Choose Your Plan</h2>

        {/* Pricing Cards Container */}
        <div className="flex justify-center gap-0">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`${
                activeIndex === index
                  ? 'scale-105 shadow-2xl z-10 bg-white'
                  : 'scale-100 bg-white shadow-lg'
              } transition-transform transform duration-500 hover:scale-105 hover:shadow-xl rounded-xl p-8 w-80 mx-2`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(1)} // Reset to middle card on mouse leave
            >
              {/* Card Content */}
              <div className="text-center">
                <div className="text-6xl mb-4">{plan.icon}</div>
                <h3 className="text-2xl font-semibold text-blue-700">{plan.name}</h3>
                <p className="text-xl text-blue-600 mt-2">{plan.price}</p>
                <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
