import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/bootstrap.min.css";
import "../styles/style.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
