import React, { useState } from 'react';
import Team from '../constants/member';
import Member from '../components/Member.jsx';
import { Helmet } from 'react-helmet';
function Members() {
  const [team, setTeam] = useState(Team);

  return (
    <div className="bg-gray-100 py-12">
      <Helmet>
        <title>UniSkyLink - Team Members</title>
        <meta name="description" content="Meet the UniSkyLink team, a group of dedicated professionals providing the best internet services. Contact us for any inquiries." />
        <meta name="keywords" content="UniSkyLink, team, members, internet services, contact" />
        <meta name="author" content="Vimal Negi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta property="og:title" content="Meet the UniSkyLink Team" />
        <meta property="og:description" content="Our team is here to provide excellent internet service and support." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
            HEAD
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.id}>
              <Member 
                image={member.image} 
                name={member.name} 
                designation={member.designation} 
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg mt-12">
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Contact Us-:</h2>
        <p className="text-gray-700 text-center">
          For inquiries, please call us at:
        </p>
        <p className="text-gray-800 font-semibold text-center text-lg">
         +91 9456124781
        </p>
      </div>
    </div>
  );
}

export default Members;
