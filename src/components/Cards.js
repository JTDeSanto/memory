import React from 'react';
import Card from './Card';

class Cards extends React.Component {

  componentWillMount() {
    this.props.getCardData();
    
  }

  render(){
    const { memoryCards, action} = this.props;

      const cards = memoryCards.map((card, index) => {
      return (
        <Card 
          key={index}
          index={index}
          card={card}
          action={action}
          

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