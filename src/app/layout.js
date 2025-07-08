import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AllKind Partners Portal",
  description: "AllKind Partners Portal",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ margin: 0, padding: 0 }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ margin: 0, padding: 0, overflow: 'hidden' }}
      >
        <Sidebar />
        <main className="bg-gray-50 min-h-screen" style={{ marginLeft: '256px', marginTop: 0, paddingTop: 0 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
