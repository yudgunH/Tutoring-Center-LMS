import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Trung Tâm Gia Sư - Nâng cao kiến thức, mở rộng tương lai",
  description:
    "Trung tâm gia sư hàng đầu với đội ngũ giáo viên chất lượng cao, chương trình học cá nhân hóa và môi trường học tập hiện đại.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className}>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1 w-full">{children}</div>
            <Footer />
          </div>
      </body>
    </html>
  )
}

