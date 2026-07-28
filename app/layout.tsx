import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CasaCurada — Hogar curado para vos',
  description: 'Mueblería, textiles y decoración de fabricantes verificados',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-stone-50 text-stone-900`}>
        <header className="bg-white border-b p-4 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold">
              Casa<span className="text-amber-600">Curada</span>
            </h1>
          </div>
        </header>

        <main className="max-w-7xl mx-auto p-4 min-h-screen">
          {children}
        </main>

        <footer className="bg-stone-900 text-white p-6 mt-12">
          <div className="max-w-7xl mx-auto text-center text-sm">
            <p>© 2026 CasaCurada. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
