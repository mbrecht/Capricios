import React from "react";
import Link from "next/link";
import styles from "../styles/Social.module.css";

export default function Social() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Find me elsewhere</h3>
      <p>
        <Link href="https://linkedin.com/in/michael-brecht">Linkedin</Link>
      </p>
      <p>
        <Link href="https://github.com/mbrecht">Github</Link>
      </p>
      <p>
        <Link href="https://twitter.com/MichaelBrecht13">Twitter</Link>
      </p>
    </div>
  );
}
