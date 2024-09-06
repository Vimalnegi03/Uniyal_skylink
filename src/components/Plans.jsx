import React, { useState } from 'react';
import Packs from '../constants/plan';
import Plan from './Plan';
import { Helmet } from 'react-helmet';
function Plans() {
  const [plans, setPlans] = useState(Packs);

  return (
    <>
     <Helmet>
        <title>BSNL Fiber Plans - UniSkyLink</title>
        <meta name="description" content="Explore the latest BSNL Fiber plans available with UniSkyLink, offering high-speed internet and affordable pricing." />
        <meta name="keywords" content="BSNL Fiber, Internet Plans, UniSkyLink, High-speed internet, Affordable plans" />
        <meta name="author" content="Vimal Negi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta property="og:title" content="BSNL Fiber Plans - UniSkyLink" />
        <meta property="og:description" content="Check out the top BSNL Fiber plans with high-speed data and affordable pricing." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
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
    </>
  );
}

export default Plans;
