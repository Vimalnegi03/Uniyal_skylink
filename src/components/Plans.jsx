import React, { useState } from 'react';
import Packs from '../constants/plan';
import Plan from './Plan';

function Plans() {
  const [plans, setPlans] = useState(Packs);

  return (
    <div className="bg-gray-100 py-12 h-screen bg-cover bg-center" style={{ backgroundImage: 'url()' }}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">BSNL Fiber Plans</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div key={plan.id} className="flex">
              <Plan 
                image={plan.image} 
                name={plan.name} 
                price={plan.price} 
                data={plan.data} 
                speed={plan.speed} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Plans;
