import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'purepro4561 Gaming Updates',
  description: 'Latest updates from the purepro4561 gaming website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-gray-100 min-h-screen flex flex-col`}>
        <header className="border-b border-gray-800">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <h1 className="text-2xl font-light">
              <Link href="/" className="hover:opacity-80 transition-opacity">purepro4561</Link>
            </h1>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className="text-sm hover:opacity-80 transition-opacity">Home</Link>
                </li>
                <li>
                  <Link href="/admin" className="text-sm hover:opacity-80 transition-opacity">Admin</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8 flex-grow flex items-center justify-center">
          {children}
        </main>
        <footer className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
            &copy; 2023 purepro4561. All rights reserved.
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  )
}

