import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'
import SidebarProvider from '../components/SidebarProvider'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Allkind',
  description: 'Allkind Partners Portal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <div className="flex flex-col min-h-screen">
            <div className="flex flex-1">
              <Sidebar />
              <MainContent>
                {children}
              </MainContent>
            </div>
            <Footer />
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
