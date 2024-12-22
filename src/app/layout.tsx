import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "Hardware Price Tracker Dashboard",
  description: "Generated by create next app",
}

const mainLocalFontFamily = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-family-main",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${mainLocalFontFamily} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  )
}
