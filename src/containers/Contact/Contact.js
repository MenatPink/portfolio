import React from "react";
import styles from "./Contact.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";

const Contact = props => {
  return (
    <div className={classNames(styles.lightyellow, styles.contact)}>
      <Link to="/">
        <h1>{props.location.key}</h1>
      </Link>
    </div>
  );
};

export default Contact;
