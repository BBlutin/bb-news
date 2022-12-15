import '../styles/globals.css'
import Header from './Header'
import Providers from './Providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className='transition-all duration-700 bg-gray-100 dark:bg-zinc-900'>
        <Providers >
          <Header />
          <main className='max-w-6xl mx-auto'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
