import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import SearchForm from './components/SearchForm';
import BusTimes from './components/BusTimes';

class App extends Component {
  state = {
    arrivaldatetime: undefined,
    duetime: undefined,
    scheduledarrivaldatetime: undefined,
    destination: undefined,
    origin: undefined,
    route: undefined,
    results:[]
  }

  getTimes = (e)=>{

    e.preventDefault();
    const stopId = e.target.elements.bus_stop.value;

    fetch(`https://data.smartdublin.ie/cgi-bin/rtpi/realtimebusinformation?stopid=${stopId}&format=json`)
    .then(response => {
      if(!response.ok){
        throw Error('Request failed ...');
      }
        return response.json();
    })
    .then(parsedJSON => {
      this.setState(
        {
          stopId: stopId,
          arrivaldatetime: parsedJSON.arrivaldatetime,
          duetime: parsedJSON.duetime,
          scheduledarrivaldatetime: parsedJSON.scheduledarrivaldatetime,
          destination: parsedJSON.destination,
          origin: parsedJSON.origin,
          route: parsedJSON.route,
          results: parsedJSON.results
        }
      )
    }, ()=>{this.setState({requestFailed: true})})
  }
  render(){
    return(
      <div className="uk-container uk-container-center uk-margin-top">
        <Title/>
        <SearchForm getTimes={this.getTimes}/>
        <BusTimes
          data = {this.state}
          />
      </div>
    )
  }
}

export default App;
