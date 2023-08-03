"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import light from "@/styles/themes/light";

import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "myButcher",
  description: "Select and buy your meat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const [theme, setTheme] = useState(light);

  return (
    <ThemeProvider theme={theme}>
      <html lang="pt-br">
        <body className={inter.className}>
          <GlobalStyle />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
