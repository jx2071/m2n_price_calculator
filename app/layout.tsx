"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title key="title">Morning 2 Night Price Calculator</title>
        <link rel="icon" href="https://morning2night.com/favicon.ico" />
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
