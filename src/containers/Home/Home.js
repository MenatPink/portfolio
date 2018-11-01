import React from "react";
import styles from "./Home.module.scss";
import Titlecard from "../../components/Titlecard/Titlecard";
import ParticleScreen from "../../UI/Particles/Particles";

const Home = props => (
  <div className={styles.Home}>
    <ParticleScreen />
    <Titlecard menuOpenHandler={props.menuOpenHandler} />
  </div>
);

export default Home;
