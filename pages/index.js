import Navbar from "../components/Navbar";
import Head from "next/head";

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
    </>
  );
};

export default IndexPage;
