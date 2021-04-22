import React from "react";
import Contact from "../components/Contact";
import Social from "../components/Social";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <Contact />
        <Social />
      </div>
    </footer>
  );
}
