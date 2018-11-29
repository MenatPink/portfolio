import React from "react";
import styles from "./Portfolio.module.scss";
import "./Portfolio.module.scss";
import classNames from "classnames";
import Hamburger from "../../components/Hamburger/Hamburger";
import { Link } from "react-router-dom";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";
import { Grid, Row, Col } from 'react-bootstrap';

const Portfolio = props => (
  <div className={"transition-item"}>
    <div className={classNames(styles.Portfolio, styles.yellow)}>
      <Link to="/">
      </Link>
      <Grid fluid={true}>
        <Row className={classNames(styles.bigRow, styles.marginGapMed)}>
          <Col xs={4}>
            <PortfolioItem number={1} />
          </Col>
          <Col xs={4}>
            <PortfolioItem />
          </Col>
          <Col xs={4}>
            <PortfolioItem />
          </Col>
        </Row>
        <Row className={styles.bigRow}>
          <Col xs={6}>
            <PortfolioItem number={2} />
          </Col>
          <Col xs={6}>
            <PortfolioItem number={2} />
          </Col>
        </Row>
        <Row className={styles.bigRow}>
          <Col xs={4}>
            <PortfolioItem number={1} />
          </Col>
          <Col xs={4}>
            <PortfolioItem />
          </Col>
          <Col xs={4}>
            <PortfolioItem />
          </Col>
        </Row>
      </Grid>
    </div>
  </div>
);

export default Portfolio;
