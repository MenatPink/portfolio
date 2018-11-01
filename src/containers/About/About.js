import React from "react";
import styles from "./About.module.scss";
import "./About.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";

const About = props => {
  console.log(props);
  return (
    <div className={classNames(styles.red, styles.about)}>
      <Link to="/">
        <h1>{props.location.key}</h1>
      </Link>
    </div>
  );
};

export default About;
