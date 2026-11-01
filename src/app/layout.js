import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Rendi Pratama | portofolio",
    template: "%s | Rendi Pratama",
  },
  description: "portofolio Rendi Pratama, siswa SMK calon Junior Web Developer di kelas Industri UBIG",
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-latar text-gray-800">
        <Navbar />
        {children}
        <Suspense
          fallback={
            <footer className="mt-auto bg-utama p-6 text-center text-latar">
              <p>
                &copy; Rendi Pratama. Dibuat dengan Next.js di Kelas Industri
                UBIG.
              </p>
            </footer>
          }
        >
          <Footer />
        </Suspense>
      </body>

    </html>


  );
}