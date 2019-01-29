import React from 'react';
import Card from './Card';

class Cards extends React.Component {

  componentWillMount() {
    this.props.getCardData();    
  }



  render(){
    const { memoryCards, getCardsToCompare, doCardsMatch, compareCards, matchedCards} = this.props;
    
      const cards = memoryCards.map((card, index) => {
        
      return (

        <Card 
          key={index}
          index={index}
          card={card}
          compareCards={compareCards}
          getCardsToCompare={getCardsToCompare}
          doCardsMatch={doCardsMatch}
          matchedCards={matchedCards}         
        />
         
      );        
       });

    return (
      <div className="card-container">
        {cards}
      </div>
    ); 
  }
}

export default Cards;