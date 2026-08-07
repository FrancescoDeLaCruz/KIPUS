import './globals.css';
import Sidebar from '../components/Sidebar';

export const metadata = {
  title: 'KIPU Finance',
  description: 'Sistema financiero personal e inteligente',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-slate-950 text-slate-100 flex min-h-screen">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
