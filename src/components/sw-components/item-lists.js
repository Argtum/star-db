import React from "react";
import SwapiService from "../../services/swapi-service";
import {withData} from "../hoc-helper";
import ItemList from "../item-list";

const swapiServices = new SwapiService();

const {
	getAllPeople,
	getAllPlanets,
	getAllStarships
} = swapiServices;

const PersonList = withData(ItemList, getAllPeople);
const PlanetList = withData(ItemList, getAllPlanets);
const StarshipList = withData(ItemList, getAllStarships);

export {
	PersonList,
	PlanetList,
	StarshipList
}
