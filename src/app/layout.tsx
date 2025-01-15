import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Muñoz A/C & Insulations - Clima Perfecto Todo el Año',
  description: 'Expertos en instalación, mantenimiento y servicio de aires acondicionados e insulación.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-800 antialiased`}>
        <div className="flex flex-col min-h-screen">
          {/* Barra de Navegación */}
          <header className="bg-primary-600 shadow-md">
            <Navigation /> {/* Asegúrate de que Navigation sea funcional */}
          </header>

          {/* Contenido Principal */}
          <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {children}
          </main>

          {/* Pie de Página */}
          <footer className="bg-gray-900 text-white py-4">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
