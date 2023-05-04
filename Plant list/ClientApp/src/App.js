import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HousePlants from './HousePlants';
import PlantInfo from './components/PlantInfo';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render() {
 
      return (
        <Router>
          <Route exact path="/" component={HousePlants} />
          <Route exact path="/plant/:id" component={PlantInfo} />
        </Router>
      );
  
  }
}
