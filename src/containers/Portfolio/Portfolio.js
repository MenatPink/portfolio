import React from "react";
import styles from "./Portfolio.module.scss";
import "./Portfolio.module.scss";
import classNames from "classnames";
import Hamburger from "../../components/Hamburger/Hamburger";
import { Link } from "react-router-dom";

const Portfolio = props => (
  <div className={"transition-item"}>
    <div className={classNames(styles.Portfolio, styles.yellow)}>
      <Link to="/">
        <h1>{props.location.key}</h1>
      </Link>
      <Hamburger onClick={props.menuOpenHandler} />
    </div>
  </div>
);

export default Portfolio;
