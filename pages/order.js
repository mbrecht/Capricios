import React from "react";
import Link from "next/link";
import styles from "../styles/Order.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>Sorry, but you can't order from this restaurant</h2>
      <p>
        My name is Michael Brecht, and I'm a software engineer. Thanks for
        taking the time to stop by and take a look at my website. If you like
        what you see, feel free to send an email to{" "}
        <Link href="mailto:brecht.michael.b@gmail.com">
          brecht.michael.b@gmail.com
        </Link>
        .
      </p>
      <h2 className={styles.goHome}>
        <Link href="/">Return Home</Link>
      </h2>
    </div>
  );
}
