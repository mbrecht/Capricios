import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <Image
          className={styles.backgroundImage}
          src="/hero-background.jpg"
          layout="fill"
          quality={10}
          priority
        />
      </div>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          Authentic Italian dining in the heart of Stoneview
        </div>
        <div className={styles.heroBtn}>
          <Link href="#menu">Menu</Link>
        </div>
      </div>
    </div>
  );
}
