import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Cards from './components/Cards';



class App extends Component {

  constructor(){
    super();
    this.state = {
      memoryCards: [],
      compareCards: [],
      matchedCards: { matched: null, card0: 0 , card1: 0}
    }
    // this.doCardsMatch = this.doCardsMatch.bind(this)
    // this.updateCardsMatchState = this.updateCardsMatchState.bind(this)
    
    
  }



  componentDidUpdate(prevProps, prevState) {
    if (prevState.compareCards.length === 1) {
      this.doCardsMatch(this.state.compareCards) 
    }
}
  


 doCardsMatch = (array) => {
  const card0 = array[0]
  const card1 = array[1]
  if (card0.note === card1.note){
    console.log("Hooray, you matched!")
    this.updateCardsMatchState(card0.index, card1.index, true);
    
  
  }
  else {
    console.log("Sorry, try again!")
        this.updateCardsMatchState(card0.index, card1.index, false);
  }
  this.clearCompareCards();
  
 };

  updateCardsMatchState = (index0, index1, matchState) => {
      this.setState( (state) => {
        return {matchedCards: {matched: matchState, card0: index0, card1: index1}}
      });    
  }
   
 getCardsToCompare = (note) => {    
    this.setState( (state) => {
      return { compareCards: [...this.state.compareCards, note] }
    });

 }

 clearCompareCards = () => {
  this.setState( (state) => {
    return { compareCards: []}
  })
 }


  getCardData = () => {
      axios.get('cardData.json')
      .then((res) => this.setState({ memoryCards: res.data })) 
      .catch((err) => console.log(err.response));
    }


  render() {
    const { memoryCards, compareCards, matchedCards } = this.state;
    
    return (
      <div className="App">
      
      <Cards 
        getCardData={this.getCardData} 
        memoryCards={memoryCards}
        compareCards={compareCards}
        getCardsToCompare={this.getCardsToCompare}
        doCardsMatch={this.doCardsMatch}
        matchedCards={matchedCards}
        updateCardsMatchState={this.updateCardsMatchState}

         />
        
        
      
      </div>

    );
  }
}

export default App;
