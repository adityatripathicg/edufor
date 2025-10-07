import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EduFor - Your Gateway to Dream Universities",
  description: "Expert guidance for university applications, scholarships, and study abroad opportunities. We help students achieve their academic dreams with personalized support and seamless application processes.",
  keywords: "university application, study abroad, scholarships, education consulting, visa support, academic guidance",
  authors: [{ name: "EduFor Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "EduFor - Your Gateway to Dream Universities",
    description: "Expert guidance for university applications, scholarships, and study abroad opportunities.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
