import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'
import SidebarProvider from '../components/SidebarProvider'
import Footer from '../components/Footer'
import ChatButton from '../components/ChatButton'
import ChatProvider from '../components/ChatProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Allkind',
  description: 'Allkind Partners Portal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <SidebarProvider>
          <ChatProvider>
            <div className="flex flex-col min-h-screen">
              <div className="flex flex-1 relative">
                <Sidebar />
                <MainContent>
                  {children}
                </MainContent>
              </div>
              <Footer />
            </div>
            <ChatButton />
          </ChatProvider>
        </SidebarProvider>
      </body>
    </html>
  )
}
