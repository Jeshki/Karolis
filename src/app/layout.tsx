
// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Karolio Čibiro Portfolio | Junior Web Engineer",
  description: "Karolis Čibiras - pradedantysis web inžinierius. Portfolio, CV, įgūdžiai ir projektai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lt" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-zinc-900 text-gray-200`}> {/* Pakeista: bg-gray-700 -> bg-zinc-800 */}
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}