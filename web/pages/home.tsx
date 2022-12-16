import React from "react";
import { Footer, Header, Main } from "../components";
import styles from "../styles/Home.module.css";
interface Props {}
const Home: React.FC<Props> = ({}) => {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.home__main}>
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
