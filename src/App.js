import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Cards from './components/Cards';


class App extends Component {

  constructor(){
    super();

    this.handleFlips = this.handleFlips.bind(this);
    this.state = {
      memoryCards: [],
      cardsFlipped: 0
    }
  }

 

  addFlippedCard = () => {
    this.setState( (state) => {
      return {cardsFlipped: state.cardsFlipped + 1}
    });
  }

  handleFlips()  {
    this.addFlippedCard();
  }

  getCardData = () => {
      axios.get('cardData.json')
      .then((res) => this.setState({ memoryCards: res.data })) 
      .catch((err) => console.log(err.response));
    }

  render() {
    const { memoryCards, cardsFlipped } = this.state;
    
    return (
      <div className="App">
      
      <Cards 
        getCardData={this.getCardData} 
        memoryCards={memoryCards} 
        cardsFlipped={cardsFlipped} 
        action={this.addFlippedCard}

         />
        
        <button >Add a card</button>
      
      </div>

    );
  }
}

export default App;
