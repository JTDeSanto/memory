import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Cards from './components/Cards';


class App extends Component {

  constructor(){
    super();
    this.state = {
      memoryCards: []

    }
  }


  getCardData = () => {
      axios.get('cardData.json')
      .then((res) => this.setState({ memoryCards: res.data })) 
      .catch((err) => console.log(err.response));
    }

  render() {
    const { memoryCards } = this.state;
    console.log(this.state);
    return (
      <div className="App">
      
      <Cards getCardData={this.getCardData} memoryCards={memoryCards} />
      
      
      </div>
    );
  }
}

export default App;
