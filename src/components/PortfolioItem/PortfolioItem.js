import React from "react";
import styles from "./PortfolioItem.module.scss";
import breakfast from "../../assets/images/breakfast.jpeg";
import { VelocityComponent } from "velocity-react";
import { Link } from "react-router-dom";


const PortfolioItem = props => {
    return <VelocityComponent
        duration={2000}
    // animation
    >
        <Link to={`/Portfolio/${props.title}`}>
            <div className={styles.PortfolioItem}>
                <div className={styles.border}></div>
                <img src={breakfast} alt="Breakfast Cereal Bowl" />
                <h1>{props.title}</h1>
            </div>
        </Link>
    </VelocityComponent>
}


export default PortfolioItem;