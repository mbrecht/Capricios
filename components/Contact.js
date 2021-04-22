import React from "react";
import Link from "next/link";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container} id="contact">
      <h3 className={styles.title}>Contact Me</h3>
      <p className={styles.email}>
        <Link href="mailto:brecht.michael.b@gmail.com">
          brecht.michael.b@gmail.com
        </Link>
      </p>
      <p className={styles.subtitle}>
        (PS: I'm a software engineer, this isn't a real restaurant)
      </p>
    </div>
  );
}
