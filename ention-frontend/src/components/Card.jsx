import React from 'react';

export default function Card({ title, description, features }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-3">{description}</p>
      <ul className="list-disc list-inside text-sm text-gray-600">
        {features.map((feature, i) => <li key={i}>{feature}</li>)}
      </ul>
    </div>
  );
}
