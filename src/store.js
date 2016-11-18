import { createStore } from 'redux';
import rootReducer from './reducers';
import cardData from './data';

const defaultState = {
  deck: cardData,
  graveyard: []
};

const store = createStore(rootReducer, defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;