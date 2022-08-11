// pages/_app.js
import "../styles/global.scss";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component id="page-wrap" {...pageProps} />
    </Layout>
  );
}
