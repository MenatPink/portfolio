import React from "react";
import styles from "./PortfolioItem.module.scss";
import breakfast from "../../assets/images/breakfast.jpeg"


const PortfolioItem = props => {
    return <VelocityComponent
        duration={2000}
    >
        <div className={styles.PortfolioItem}>
            <div className={styles.border}></div>
            <img src={breakfast} alt="Breakfast Cereal Bowl" />
            <h1>Portfolio Item {props.number}</h1>
        </div>
    </VelocityComponent>
}


export default PortfolioItem;