import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList} from "../sw-components";

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
        <div className="app-container">
          <Header />
          <RandomPlanet />

          <PersonDetails itemId={11} />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={9} />

          <PersonList />
          <PlanetList />
          <StarshipList />

        </div>
      </ErrorBoundry>
    );
  }
};