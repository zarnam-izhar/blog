import Header from "./header"


import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My Blog",
  description: "A review of literature and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="bg-white shadow-md py-4">
            <div className="container mx-auto flex justify-center">
              <nav className="bg-gray-50 p-4 rounded-lg shadow-md flex space-x-10">
                <Link href="/" className="text-lg font-semibold text-indigo-600 hover:text-indigo-800 transition duration-200">
                  Home
                </Link>
                <Link href="/about" className="text-lg font-semibold text-indigo-600 hover:text-indigo-800 transition duration-200">
                  About
                </Link>
                <Link href="/blog" className="text-lg font-semibold text-indigo-600 hover:text-indigo-800 transition duration-200">
                  Blog
                </Link>
              </nav>
            </div>
          </header>

          {/* Main Content */}
          <main className="container mx-auto flex-1 p-4">{children}</main>

          {/* Footer */}
          <footer className="bg-gray-900 text-gray-400 py-4 text-center">
            <p>© 2024 My Blog. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
