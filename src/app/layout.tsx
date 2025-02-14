import type { Metadata } from "next";
import { Kalam, Quicksand, Dancing_Script, Pinyon_Script } from "next/font/google";
import "./globals.css";

const QuicksandFont = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const kalamFont = Kalam({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kalam",
})

const dancingScriptFont = Dancing_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dancing-script",
})

const pinyonScriptFont = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pinyon-script",
})

export const metadata: Metadata = {
  title: "Boda Pablo y Cande",
  description: "Boda Pablo y Cande",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${QuicksandFont.variable} ${kalamFont.variable} ${dancingScriptFont.variable} ${pinyonScriptFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
