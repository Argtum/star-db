import React, {Component} from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import {SwapiServiceProvider} from "../swapi-service-context"
import {PeoplePage, PlanetsPage, StarshipsPage} from "../pages"
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./app.css";
import StarshipDetails from "../sw-components/starship-details";

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true});
  }

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div className="app-container">
              <Header />
              <RandomPlanet />

              <Route path="/" render={() => <h2>Welcome to StarDB</h2>} exact />
              <Route path="/people" component={PeoplePage} />
              <Route path="/planets" component={PlanetsPage} />
              <Route path="/starships" component={StarshipsPage} exact />
              <Route path="/starships/:id" render={({match}) => {
                const {id} = match.params;

                return <StarshipDetails itemId={id} />
              }} />

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};
