import React from 'react';
import calculateMinMaxDamage from '../calculateMinMaxDamage';
import Card from './Card';

const MinMaxDamage = React.createClass({
  getInitialState() {
    return {spots: 7};
  },
  decrementSpots() {
    let newSpots = this.state.spots - 1
    if (newSpots < 1) newSpots = 1
    this.setState({spots: newSpots})
  },
  incrementSpots() {
    let newSpots = this.state.spots + 1
    if (newSpots > 7) newSpots = 7
    this.setState({spots: newSpots})
  },
  render() {
    const { maxDamage, minDamage, odds } = calculateMinMaxDamage(this.state.spots, this.props.graveyard);
    return (
      <div className="areas">
        <div className="area controls">
          <div className="manaCrystalControls">
            Available Spots: {this.state.spots}&nbsp;&nbsp;
            <button className="decrementSpots" onClick={this.decrementSpots}>-</button>
            <button className="incrementSpots" onClick={this.incrementSpots}>+</button>
          </div>
          <div className="areaHeader">
            Built by <a href="http://cole.money">Cole Willsea</a> with React, Redux, and Flexbox. <a href="https://github.com/coleww/anyfin-pally-calculator">Source code</a>
          </div>

          <ul className="odds">
            {Object.keys(odds).map((damage) =>
              <li>{damage}: {odds[damage]}%</li>)}
          </ul>

        </div>
        <div className="area minDamage">
          <div className="areaHeader">
            Min Damage: {minDamage.damage}
          </div>
          <div className="cards">
            {minDamage.cards.map((card, i) =>
              <Card {...this.props} key={i} i={i} card={card} />)}
          </div>
        </div>
        <div className="area maxDamage">
          <div className="areaHeader">
            Max Damage: {maxDamage.damage}
          </div>
          <div className="cards">
            {maxDamage.cards.map((card, i) =>
              <Card {...this.props} key={i} i={i} card={card} />)}
          </div>
        </div>
      </div>
    );
  }
});

// <div className="area credits">
//               <div className="areaHeader">
//
//               </div>
//             </div>

export default MinMaxDamage;