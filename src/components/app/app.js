import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import {SwapiServiceProvider} from '../swapi-service-context'
import {PeoplePage, PlanetPage, StarshipPage} from '../pages'

import './app.css';

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
          <div className="app-container">
            <Header />
            <RandomPlanet />

            <PeoplePage />
            <PlanetPage />
            <StarshipPage />

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};