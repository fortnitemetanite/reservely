import React, { useState } from 'react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Basic',
      price: billingCycle === 'monthly' ? 'Free' : 'Free',
      features: [
        'For occasional reservations',
        'Standard listing in search results',
        'Limited calendar access (30 days)',
        'Basic customer support',
        'Limited venue customization',
      ],
      button: 'Get Started',
    },
    {
      name: 'Premium',
      price: billingCycle === 'monthly' ? '$9.99/mo' : '$99.99/yr',
      features: [
        'Most popular',
        'For frequent reservations',
        'Enhanced listing in search results',
        'Full calendar access',
        'Priority customer support',
        'Advanced venue customization',
        'Flexible cancellation options',
      ],
      button: 'Upgrade to Premium',
      highlight: true,
    },
    {
      name: 'VIP',
      price: billingCycle === 'monthly' ? '$29.99/mo' : '$299.99/yr',
      features: [
        'For professional venue managers',
        'Top-tier listing in search results',
        'Full calendar access',
        'Dedicated account manager',
        'Full venue customization',
        'VIP support',
      ],
      button: 'Contact Us',
    },
  ];

  const businessSolutions = [
    {
      name: 'Partner Listing',
      features: [
        'Featured placement in search results',
        'Enhanced promotional tools',
        'Direct booking integration',
      ],
      button: 'Contact Sales',
    },
    {
      name: 'Enterprise',
      features: [
        'For large venue chains',
        'Custom integrations',
        'API access',
        'Dedicated account manager',
      ],
      button: 'Contact Sales',
    },
  ];

  const memberFeatures = [
    {
      title: 'Exclusive Venues',
      description:
        'Access to members-only venues, premium locations, and hidden gems.',
    },
    {
      title: 'VIP Treatment',
      description:
        'Priority booking, concierge services, and personalized recommendations.',
    },
    {
      title: 'Special Events',
      description:
        'Invitations to exclusive events, networking opportunities, and member-only experiences.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 space-y-16">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Choose Your Plan</h2>
        <div className="inline-flex items-center border rounded-md overflow-hidden">
          <button
            className={`px-4 py-2 font-medium ${
              billingCycle === 'monthly' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'
            }`}
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              billingCycle === 'yearly' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'
            }`}
            onClick={() => setBillingCycle('yearly')}
          >
            Yearly <span className="ml-1 text-sm text-green-600">(Save 25%)</span>
          </button>
        </div>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-white rounded-lg shadow-md p-6 flex flex-col justify-between ${
              plan.highlight ? 'border-2 border-blue-600' : ''
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">{plan.name}</h3>
              <p className="text-xl font-semibold mb-4">{plan.price}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">• {feature}</li>
                ))}
              </ul>
            </div>
            <button className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              {plan.button}
            </button>
          </div>
        ))}
      </div>

      {/* Business Solutions */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-blue-600 mb-6 text-center">Business Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {businessSolutions.map((solution) => (
            <div key={solution.name} className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-bold text-blue-600 mb-2">{solution.name}</h4>
              <ul className="mb-4 space-y-2">
                {solution.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">• {feature}</li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                {solution.button}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Private Member Features */}
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-blue-600 mb-6">Private Member Features</h3>
        <div className="space-y-6">
          {memberFeatures.map((feature) => (
            <div key={feature.title} className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-bold text-blue-600 mb-2">{feature.title}</h4>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
