import React from 'react';

class Card extends React.Component {


  constructor(){

    super();
    this.state = {
      flipped: false 
    };
    
  }

  ifCardCanBeFlipped = () => {
    if (this.props.compareCards.length <2 && this.state.flipped === false){     
        this.flipCard();
        this.updateCardsToCompare({note: this.props.card.note, index: this.props.index});
        
    }
    else if (this.state.flipped === true){
      alert("Card is already flipped!")
    }
    this.ifCardsDontMatch();
  }

  flipCard = () => {
    this.setState({ flipped: !this.state.flipped });
    // console.log(this.props)  
  }

  updateCardsToCompare = (note) => {
    this.props.getCardsToCompare(note);
  }

  cardClass = () => this.state.flipped ? 'Card -back' : 'Card -front'
  
  ifCardsDontMatch = () => {
     if (this.props.matchedCards.matched === false && this.props.matchedCards.card0 !== this.props.matchedCards.card1 ){
    console.log(this.props.matchedCards)
     }
    this.flipCard();
  }
  
  

  render() {
   
    return (
        <div className={this.cardClass()} onClick={this.ifCardCanBeFlipped } >
          {!this.state.flipped ?
          <div>
            <span>M-E<sup><i>b</i></sup></span>
          </div>
          :
          <div>
            <img src={require(`${this.props.card.image}`)} alt={this.props.index} />
            <span>{this.props.card.note}</span>
          </div>
        }
        </div>
        )
  };
}

export default Card;