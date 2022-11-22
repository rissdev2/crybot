import Head from "next/head";
import Script from "next/script";
import About from "../Components/About";
import Aisolution from "../Components/Aisolution";
import Cards from "../Components/Cards";
import Dashboard from "../Components/Dashboard";
import Experience from "../Components/Experience";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Partners from "../Components/Partners";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
        <title>crybot.</title>
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" />
      <Script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" />

      <section className="home-sec">
        <Header />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <Hero />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <Partners />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <About />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <Cards />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <Dashboard />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <Experience />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <Aisolution />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <Footer />
      </section>
    </>
  );
}
