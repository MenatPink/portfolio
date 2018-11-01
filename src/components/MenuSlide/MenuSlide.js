import React from "react";
import styles from "./MenuSlide.module.scss";
import classNames from "classnames";
import { VelocityComponent } from "velocity-react";
import { Link } from "react-router-dom";

const MenuSlide = props => {
  let transitionItem = "transition-item";
  let color;
  if (props.color === "black") {
    color = styles.black;
  } else if (props.color === "yellow") {
    color = styles.yellow;
  } else if (props.color === "lightyellow") {
    color = styles.lightyellow;
  } else if (props.color === "red") {
    color = styles.red;
  } else {
    color = styles.blue;
  }
  return (
    <VelocityComponent
      runOnMount={true}
      duration={200}
      animation={{ opacity: 1, width: "20%" }}
      ease={"ease-in-out"}
    >
      <VelocityComponent
        runOnMount={true}
        duration={10}
        animation={{ scale: props.isHover ? 1.2 : 1 }}
      >
        <Link
          to={`/${props.item}`}
          className={classNames(styles.MenuSlide, color, transitionItem)}
          onMouseEnter={props.isHoverHandler}
          onMouseOut={props.isHoverOutHandler}
          onClick={props.menuClose}
          item={props.item}
        >
          <h1>{props.menuTitle}</h1>
        </Link>
      </VelocityComponent>
    </VelocityComponent>
  );
};

export default MenuSlide;
