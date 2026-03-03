import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Veggdyrsøk med Hund | Profesjonell Deteksjon av Veggdyr",
  description: "Profesjonell søk med hund etter veggdyr for hotell, institusjoner og private. Effektiv og pålitelig deteksjon av veggdyr med sertifiserte søkehunder.",
  keywords: ["veggdyr", "veggdyrsøk", "søkehund", "veggdyrdeteksjon", "hotell", "institusjoner"],
  openGraph: {
    title: "Veggdyrsøk med Hund",
    description: "Profesjonell søk med hund etter veggdyr",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const initialTheme = theme || (prefersDark ? 'dark' : 'light');
                if (initialTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <Navigation />
        <main className="">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
