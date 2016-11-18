import { createStore } from 'redux';
import rootReducer from './reducers';
import cardData from './data';

const defaultState = {
  deck: cardData,
  graveyard: []
};

// TODO: add dev/prod logic to ensure this doesn't "go live", lol
const store = createStore(rootReducer, defaultState);


export default store;