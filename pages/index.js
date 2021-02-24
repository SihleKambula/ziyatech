import Navbar from "../components/Navbar";
import Head from "next/head";
import Main from "../components/Main";
import Services from "../components/Services";
import Form from "../components/Form";
import Footer from "../components/Footer";

//Component

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Ziyatech</title>
        <link
          rel='shortcut icon'
          href='assets/Ziyatech-sm.png'
          type='image/x-icon'
        />
      </Head>

      <header>
        <Navbar />
      </header>

      <Main />

      <section id='services'>
        <Services />
      </section>

      <section id='contact'>
        <Form />
      </section>

      <Footer />
    </>
  );
};

export default IndexPage;
