import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "./theme-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AmakeBachao | Emergency SOS alert",
  description:
    "Instant local help in emergencies - Send alerts, get assistance, and build a safer community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableColorScheme
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
