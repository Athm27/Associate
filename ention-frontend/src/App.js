import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import ContactForm from './components/ContactForm';
import './index.css';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/cards')
      .then(res => res.json())
      .then(data => setCards(data))
      .catch(err => console.error('Error loading cards:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070D2A] via-[#133B5C] to-[#0FAFCA] p-6">
      <h1 className="text-3xl font-bold text-center underline underline-offset-8 mb-8 text-white">Associate with ENTION</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 mt-[90px]">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} features={card.features} />
        ))}
      </div>

      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold underline underline-offset-8 mb-4 text-white">Contact Us</h2>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
