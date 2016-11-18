import React, { Component } from 'react';
import Graveyard from './components/Graveyard';
import Deck from './components/Deck';
import MinMaxDamage from './components/MinMaxDamage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="areas">
            <Deck {...this.props} />
            <Graveyard {...this.props} />
          </div>
          <MinMaxDamage {...this.props} />
        </div>

      </div>
    );
  }
}

export default App;
