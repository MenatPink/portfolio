import React, { Component } from "react";
import styles from "./Titlecard.module.scss";
import Typed from "react-typed";
import Hamburger from "../Hamburger/Hamburger";

class Titlecard extends Component {
  render() {
    return (
      <div className={styles.Titlecard}>
        <h1>
          My Name is <span>Menat</span>
        </h1>
        <p>
          <strong>I am </strong>
          <Typed
            strings={[
              "testing out new things",
              "testing out new ideas",
              "like this!",
              "etc etc",
              "now Were working"
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </p>
        <Hamburger menuOpenHandler={this.props.menuOpenHandler} />
      </div>
    );
  }
}

export default Titlecard;
