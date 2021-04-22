import Hero from "../components/Hero";
import Menu from "../components/Menu";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <Menu />
    </div>
  );
}
