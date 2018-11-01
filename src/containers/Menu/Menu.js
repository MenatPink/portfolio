import React from "react";
import styles from "./Menu.module.scss";
import MenuSlide from "../../components/MenuSlide/MenuSlide";
import PageTransition from "react-router-page-transition";

const Menu = props => {
  //Connect the Array of menu slides to state
  // Create Array for the State Keys
  let menuArr = Object.keys(props.menu);
  // Create an Array for the Title
  // Create an Array for Color
  let menuTitleArr = [];
  let colorArr = [];
  let isHoverArr = [];
  for (var i in props.menu) {
    menuTitleArr.push(props.menu[i].title);
    colorArr.push(props.menu[i].color);
    isHoverArr.push(props.menu[i].isHover);
  }

  return (
    <div className={styles.Menu}>
      {menuArr.map((item, i) => {
        return (
          <MenuSlide
            item={item}
            key={i}
            color={colorArr[i]}
            menuTitle={menuTitleArr[i]}
            isHoverHandler={props.isHoverHandler}
            isHoverOutHandler={props.isHoverOutHandler}
            isHover={isHoverArr[i]}
            menuClose={props.menuClose}
          />
        );
      })}
    </div>
  );
};

export default Menu;
