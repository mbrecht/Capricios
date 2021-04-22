import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navigation />
      <Hero />
      <Menu />
    </div>
  );
}
