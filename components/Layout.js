import React from "react";
import Footer from "../components/Footer";
import Head from "next/head";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Capricio's Italian Restaurant</title>
      </Head>

      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
}
