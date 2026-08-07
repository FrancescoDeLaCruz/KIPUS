'use client';

import React, { useEffect, useState } from 'react';
import { api } from '../../../lib/api';

export default function CreditCardsPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.get('/credit-cards').then((res) => setCards(res.data));
  }, []);

  return (
    <div className="p-8 bg-slate-950 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6 text-sky-400">Mis Tarjetas de Crédito</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card: any) => (
          <div key={card.id} className="bg-slate-900 p-6 rounded-2xl border border-white/10">
            <h2 className="text-lg font-bold">{card.name}</h2>
            <p className="text-slate-400 mt-2">Límite: S/ {card.creditLimit}</p>
            <p className="text-slate-400">Día de pago: {card.dueDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
