'use client';

import React, { useEffect, useState } from 'react';
import { api } from '../../../lib/api';

export default function SavingsPage() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    api.get('/savings').then((res) => setGoals(res.data));
  }, []);

  return (
    <div className="p-8 bg-slate-950 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6 text-emerald-400">Mis Metas de Ahorro</h1>
      <div className="space-y-4">
        {goals.map((goal: any) => {
          const progress = (Number(goal.currentAmount) / Number(goal.targetAmount)) * 100;
          return (
            <div key={goal.id} className="bg-slate-900 p-6 rounded-2xl border border-white/10">
              <div className="flex justify-between mb-2">
                <span className="font-bold">{goal.title}</span>
                <span>{progress.toFixed(0)}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
