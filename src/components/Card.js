import React from 'react';


class Card extends React.Component {
  
  render() {
      const { card } = this.props;

    return (
        <div className="memory-card-container" >
        "I'm a memory Card " {card}
        </div>
        )
  };
}

export default Card;