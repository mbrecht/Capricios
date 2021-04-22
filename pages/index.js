import Head from "next/head";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        {/* Open Graph */}
        <meta property="og:title" content="Capricio's Italian Restaurant" />
        <meta
          property="og:description"
          content="A real website for a fake restaurant in a fake city"
        />
        <meta
          property="og:image"
          content="https://capricios.vercel.app/hero-background.jpg"
        />
        <meta property="og:url" content="http://capricios.vercel.app/" />
        {/* Twitter */}
        <meta name="twitter:title" content="Capricio's Italian Restaurant " />
        <meta
          name="twitter:description"
          content="A real website for a fake restaurant in a fake city"
        />
        <meta
          name="twitter:image"
          content="https://capricios.vercel.app/hero-background.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.container}>
        <Navigation />
        <Hero />
        <Menu />
      </div>
    </>
  );
}
