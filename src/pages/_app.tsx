import { ChakraProvider } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";

import "@/randy-travel/styles/globals.css";
import theme from "../theme";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Randy Travel Solution</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Randy Travel Solution" />
        <meta property="og:title" content="Randy Travel Solution" />
        <meta property="og:description" content="Randy Travel Solution" />
        <meta property="og:image" content="/logo-text.svg" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <ChakraProvider theme={theme}>
        <main className={`${inter.className}`}>
          <Component {...pageProps} />
        </main>
      </ChakraProvider>
    </>
  );
}
