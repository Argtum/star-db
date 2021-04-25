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

const withChildFunction = (Wrapped, fn) => {
	return (props) => {
		return (
			<Wrapped {...props}>
				{fn}
			</Wrapped>
		)
	};
};

const renderName = ({name}) => <span>{name}</span>;
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>;

const PersonList = withData(withChildFunction(ItemList, renderName), getAllPeople);
const PlanetList = withData(withChildFunction(ItemList, renderName), getAllPlanets);
const StarshipList = withData(withChildFunction(ItemList, renderModelAndName), getAllStarships);

export {
	PersonList,
	PlanetList,
	StarshipList
}
