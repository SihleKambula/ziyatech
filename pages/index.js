import Navbar from "../components/Navbar";
import Head from "next/head";
import Main from "../components/Main";
import Services from "../components/Services";
import Form from "../components/Form";

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

      <section>
        <Services />
      </section>

      <section>
        <Form />
      </section>
    </>
  );
};

export default IndexPage;
