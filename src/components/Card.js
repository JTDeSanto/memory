import React from 'react';



class Card extends React.Component {

  constructor(){
    super();
    this.state = {
      flipped: false,
      
    };
  }

 

  flipCard = () => {
    this.setState({ flipped: !this.state.flipped });

  }

  cardClass = () => this.state.flipped ? 'Card -back' : 'Card -front'
  
  

  render() {
     
    return (
        <div className={this.cardClass()} onClick={ () => this.flipCard() } >
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