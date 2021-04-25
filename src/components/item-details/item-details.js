import React, { Component } from 'react';

import './item-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

const Record = ({data, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{data[field]}</span>
    </li>
  );
};

export {
  Record
};

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    image: null,
    loading: false
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({
        loading: true
      });

      this.updateItem();
    }
  }

  updateItem() {
    const {itemId, getData, getImageUrl} = this.props;

    if (!itemId) {
      return;
    }

    this.setState({loading: true});

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImageUrl(item),
          loading: false
        });
      });
  }

  render() {
    const {item, loading, image} = this.state;

    const errorMessage = !item ? <NoDataView /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !loading && item ? <DataView data={item} image={image} children={this.props.children} /> : null;

    return (
      <div className="item-details card">
        {errorMessage}
        {spinner}
        {content}
      </div>
    )
  }
}

const NoDataView = () => {
  return (
    <React.Fragment>
      <span>Select a person from a list</span>
    </React.Fragment>
  )
};

const DataView = ({data, image, children}) => {
  const {name} = data;

  return (
    <React.Fragment>
      <img className="item-image"
         src={image}
         alt="character"/>

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(children, (child) => {
              return React.cloneElement(child, {data});
            })
          }
        </ul>
      </div>
    </React.Fragment>
  )
};
