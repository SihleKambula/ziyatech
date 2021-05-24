import Navbar from "../components/Navbar";
import Head from "next/head";
import Main from "../components/Main";
import Services from "../components/Services";
import Form from "../components/Form";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

//Component

const IndexPage = () => {
  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <>
      <Head>
        <title>Ziyatech</title>
        <meta
          name='keywords'
          content='IT Support Business Management SARS Filing'
        />
        <script
          data-ad-client='ca-pub-7306326090035759'
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
        ></script>
        <link
          rel='shortcut icon'
          href='assets/Ziyatech-sm.webp'
          type='image/x-icon'
        />
      </Head>

      <motion.header
        initial='hidden'
        animate='show'
        transition={{ duration: 1 }}
        variants={variants}
      >
        <Navbar />
      </motion.header>

      <Main />

      <section id='services'>
        <Services />
      </section>

      <section id='contact'>
        <script
          data-ad-client='ca-pub-7306326090035759'
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
        ></script>
        <Form />
      </section>

      <Footer />
    </>
  );
};

export default IndexPage;
