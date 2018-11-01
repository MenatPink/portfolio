import React from "react";
import styles from "./Hamburger.module.scss";

const Hamburger = props => (
  <div onClick={props.menuOpenHandler} className={styles.Hamburger} />
);

export default Hamburger;
