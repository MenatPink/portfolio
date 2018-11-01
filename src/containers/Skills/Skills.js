import React from "react";
import styles from "./Skills.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";

const Skills = props => {
  return (
    <div className={classNames(styles.blue, styles.skills)}>
      <Link to="/">
        <h1>{props.location.key}</h1>
      </Link>
    </div>
  );
};

export default Skills;
