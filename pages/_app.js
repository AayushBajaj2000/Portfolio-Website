import "../styles/globals.css";
import Layout from "@components/Layout";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aayush Bajaj</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script
        id="gat"
        strategy="lazyOnload"
        src={"https://www.googletagmanager.com/gtag/js?id=G-0SMVZR7HZT"}
      ></Script>
      <Script id="ga" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-0SMVZR7HZT');`}
      </Script>
    </>
  );
}

export default MyApp;
