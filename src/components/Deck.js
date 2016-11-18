import React from 'react';
import Card from './Card';

const Deck = React.createClass({
  render() {
    return (
      <div className="area half deck">
        <div className="areaHeader">
          Murlocs
        </div>
        <div className="cards">
          {this.props.deck.map((card, i) =>
            <Card {...this.props} key={i} i={i} card={card} onClick={this.props.killMurloc.bind(null, i)}/>)}
        </div>
      </div>
    );
  }
});

export default Deck;