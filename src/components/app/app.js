import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import ItemDetails, { Record } from "../item-details/item-details";

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true});
  }

  render() {
    const {getPerson, getStarship, getPersonImage, getStarshipImage} = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}>

        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
        <Record field="birthYear" label="Birth Year" />

      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}>

        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />

      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <div className="app-container">
          <Header />
          <RandomPlanet />

          <Row
            left={personDetails}
            right={starshipDetails}
          />

        </div>
      </ErrorBoundry>
    );
  }
};