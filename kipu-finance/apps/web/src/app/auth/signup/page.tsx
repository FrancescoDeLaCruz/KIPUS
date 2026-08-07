'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function SignupPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí conectaremos con el endpoint /auth/signup de tu backend NestJS
    console.log('Registrando usuario:', fullName, email);
  };

  return (
    <main className="min-h-screen bg-background text-text-primary flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-card p-8 rounded-2xl border border-white/5 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary-green mb-2">Crear Cuenta</h1>
          <p className="text-text-secondary text-sm">Comienza a administrar tus finanzas con KIPU.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-wider text-text-secondary mb-2">
              Nombre Completo
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-primary-green transition-colors"
              placeholder="Francesco De La Cruz"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-text-secondary mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-primary-green transition-colors"
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
              className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-primary-green transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-green hover:bg-primary-turquoise text-background font-bold py-3 rounded-xl transition-colors shadow-lg shadow-primary-green/20"
          >
            Registrarse
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-text-secondary">
          ¿Ya tienes una cuenta?{' '}
          <Link href="/auth/login" className="text-primary-green hover:underline">
            Inicia sesión
          </Link>
        </div>
      </div>
    </main>
  );
}
