import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 border-r border-white/5 flex flex-col p-6 min-h-screen">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-sky-400">KIPU Finance</h2>
        <p className="text-xs text-slate-500">Gestión Inteligente</p>
      </div>

      <nav className="space-y-2 flex-1">
        <Link
          href="/dashboard/credit-cards"
          className="block px-4 py-3 rounded-xl text-slate-300 hover:bg-white/5 hover:text-sky-400 transition-colors"
        >
          Tarjetas de Crédito
        </Link>
        <Link
          href="/dashboard/savings"
          className="block px-4 py-3 rounded-xl text-slate-300 hover:bg-white/5 hover:text-emerald-400 transition-colors"
        >
          Metas de Ahorro
        </Link>
      </nav>

      <div className="pt-6 border-t border-white/5 text-xs text-slate-500 text-center">
        KIPU v2.0 - Fase 2
      </div>
    </aside>
  );
}
