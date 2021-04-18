import React, { Component } from 'react';

import './people-page.css';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 1,
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({
      selectedPerson
    })
  }

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {(i) => (
          `${i.name} (${i.birthYear})`
        )}
      </ItemList>
    )

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson}/>
    )

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
