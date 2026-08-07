'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí conectaremos con el endpoint /auth/signin de tu backend NestJS
    console.log('Iniciando sesión con:', email);
  };

  return (
    <main className="min-h-screen bg-background text-text-primary flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-card p-8 rounded-2xl border border-white/5 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary-blue mb-2">KIPU Finance</h1>
          <p className="text-text-secondary text-sm">Tu economía personal conectada como un quipu.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-wider text-text-secondary mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-primary-blue transition-colors"
              placeholder="tu@correo.com"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-text-secondary mb-2">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-primary-blue transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-blue hover:bg-primary-turquoise text-background font-bold py-3 rounded-xl transition-colors shadow-lg shadow-primary-blue/20"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-text-secondary">
          ¿Aún no tienes una cuenta?{' '}
          <Link href="/auth/signup" className="text-primary-blue hover:underline">
            Regístrate aquí
          </Link>
        </div>
      </div>
    </main>
  );
}
