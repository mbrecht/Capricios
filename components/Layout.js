import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Restaurant</title>
      </Head>

      <Navigation />
      <>{children}</>
      <Footer />
    </div>
  );
}
