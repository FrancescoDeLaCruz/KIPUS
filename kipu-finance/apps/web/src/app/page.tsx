import os
import zipfile

# Define a professional, dashboard-ready page.tsx content
page_tsx_content = """import React from 'react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background text-text-primary p-6 md:p-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-primary-blue">KIPU Dashboard</h1>
        <p className="text-text-secondary">Bienvenido de nuevo, Francesco.</p>
      </header>

      {/* Grid de Tarjetas de Resumen */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Ingresos Totales", value: "S/ 12,450", color: "text-primary-green" },
          { title: "Gastos Totales", value: "S/ 4,820", color: "text-primary-purple" },
          { title: "Ahorros", value: "S/ 3,100", color: "text-primary-turquoise" },
          { title: "Deuda Total", value: "S/ 15,000", color: "text-primary-yellow" },
        ].map((card, idx) => (
          <div key={idx} className="bg-card p-6 rounded-2xl border border-white/5 shadow-lg">
            <h2 className="text-sm text-text-secondary mb-2">{card.title}</h2>
            <p className={`text-2xl font-bold ${card.color}`}>{card.value}</p>
          </div>
        ))}
      </section>

      {/* Espacio para Gráficos e IA */}
      <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card p-8 rounded-2xl border border-white/5">
          <h2 className="text-xl font-semibold mb-4">Evolución Financiera</h2>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-white/10 rounded-xl text-text-secondary">
            [Gráfico de Recharts pendiente]
          </div>
        </div>
        <div className="bg-card p-8 rounded-2xl border border-white/5">
          <h2 className="text-xl font-semibold mb-4 text-primary-blue">Kipu IA</h2>
          <p className="text-sm text-text-secondary italic">
            "Analizando tus gastos: Se detectó una tendencia al alza en 'Alimentación'. Considera ajustar este rubro para alcanzar tu meta de ahorro."
          </p>
        </div>
      </section>
    </div>
  );
}
"""

# Update the file
with open("kipu-finance/apps/web/src/app/page.tsx", "w") as f:
    f.write(page_tsx_content)

# Re-zip the project
zip_filename = "kipu-finance.zip"
with zipfile.ZipFile(zip_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk("kipu-finance"):
        for file in files:
            zipf.write(os.path.join(root, file))

print(f"File updated and project re-compressed: {zip_filename}")
