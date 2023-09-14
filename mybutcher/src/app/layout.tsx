"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { DefaultProviders } from "@/components/providers/default-providers";
import GlobalStyles from "@/styles/global";
import { DefaultPageLayout } from "@/styles/default-page-layout";
import StyledComponentsRegistry from "@/styles/registry";
import { ThemeProvider } from "styled-components";
import light from '@/styles/themes/light';
import { Header } from "@/components/header";
import { CartSession } from "@/components/cart-session";
import { Filters } from "@/components/filters";
import { Footer } from "@/components/footer";

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
  return (
    <html lang="pt-br">
      <StyledComponentsRegistry>
        <DefaultProviders>
          <ThemeProvider theme={light}>
            <GlobalStyles />
            <body className={inter.className}>
                <Header/>
                <Filters/>
                {children}
                <CartSession/>
                <Footer/>
            </body>
          </ThemeProvider>
        </DefaultProviders>
      </StyledComponentsRegistry>
    </html>
  );
}
