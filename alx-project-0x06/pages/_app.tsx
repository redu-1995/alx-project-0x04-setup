import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { CountProvider } from "@/context/CountContext";
import Layout from "@/components/layouts/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CountProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CountProvider>
  );
}
