import "../styles/globals.css";
import Layout from "@components/Layout";
import Head from "next/head";
import Script from "next/script";
import { LinkProvider } from "@data/LinkProvider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aayush Bajaj</title>
      </Head>
      <LinkProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LinkProvider>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
    </>
  );
}

export default MyApp;
