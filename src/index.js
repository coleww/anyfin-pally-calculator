import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider, connect } from 'react-redux';
import store from './store';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actionCreators';

function mapStateToProps (state) {
  return {
    deck: state.deck,
    graveyard: state.graveyard
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// magically bind the store/dispatch to our main component. MARVELOUS
const MainApp = connect(mapStateToProps, mapDispatchToProps)(App);

const app = (
  <Provider store={store}>
    <MainApp />
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);
