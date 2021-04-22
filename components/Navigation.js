import React from "react";
import Link from "next/link";
import styles from "../styles/Navigation.module.css";

export default function Navigation() {
  return (
    <div className={styles.container}>
      <div className={styles.brand}>
        <Link href="/">Capricio's</Link>
      </div>
      <ul className={styles.menu}>
        <li className={`${styles.button} ${styles.orderBtn}`}>
          <Link href="/order">Order Now</Link>
        </li>
        <li className={`${styles.button} ${styles.contactBtn}`}>
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
