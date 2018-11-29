import React, { Component } from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import styles from "./App.module.scss";
import Home from "../Home/Home";
import Menu from "../Menu/Menu";
import Portfolio from "../Portfolio/Portfolio";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Aux from "../../hoc/Auxiliary";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import classNames from "classnames";

class App extends Component {
  state = {
    menu: {
      menuOpen: false,
      menuOptions: {
        Home: {
          isHover: false,
          color: "black",
          title: "Home"
        },
        Portfolio: {
          isHover: false,
          color: "yellow",
          title: "Portfolio"
        },
        About: {
          isHover: false,
          color: "red",
          title: "About"
        },
        Contact: {
          isHover: false,
          color: "lightyellow",
          title: "Contact"
        },
        Skills: {
          isHover: false,
          color: "blue",
          title: "Skills"
        }
      }
    },
    portfolio: {
      d3: {
        isHover: false,
        title: "d3",
      },
      react: {
        isHover: false,
        title: "React-Training"
      },
      graphql: {
        isHover: false,
        title: "GraphQL"
      }
    }
  };

  menuOpenHandler = () => {
    this.setState({ menuOpen: true });
  };
  menuCloseHandler = () => {
    this.setState({ menuOpen: false });
  };

  portfolioHoverStateHandler = e => { }

  portfolioHoverOutStateHandler = e => { }

  hoverStateHandler = e => {
    let item = e.currentTarget.getAttribute("item");
    this.setState(prevState => {
      return (prevState.menu.menuOptions[item].isHover = true);
    });
  };

  hoverOutStateHandler = e => {
    let item = e.currentTarget.getAttribute("item");
    this.setState(prevState => {
      return (prevState.menu.menuOptions[item].isHover = false);
    });
  };

  render() {
    console.log(this);
    return (
      <Switch location={this.props.location.key}>
        <div className={classNames(styles.App)}>
          <Route
            path="/"
            exact
            render={({ location }) => {
              return (
                <Aux>
                  <Home menuOpenHandler={this.menuOpenHandler} />
                  {this.state.menuOpen ? (
                    <Menu
                      menu={this.state.menu.menuOptions}
                      isHoverHandler={this.hoverStateHandler}
                      isHoverOutHandler={this.hoverOutStateHandler}
                      menuClose={this.menuCloseHandler}
                    />
                  ) : null}
                </Aux>
              );
            }}
          />
          <Route path="/Home" exact render={() => <Redirect to="/" />} />
          <Route
            path="/Portfolio"
            exact
            render={routeProps => (
              <Portfolio
                {...routeProps}
                color={this.state.menu.menuOptions.Portfolio.color}
                portfolio={this.state.portfolio}
              />
            )}
          />
          <Route
            path="/About"
            exact
            render={routeProps => (
              <About
                {...routeProps}
                color={this.state.menu.menuOptions.Portfolio.color}
              />
            )}
          />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/Skills" exact component={Skills} />
        </div>
      </Switch>
    );
  }
}

export default App;
