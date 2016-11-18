import React from 'react';
import rootReducer from './reducers';

const initialState = {
  deck: [{name: 'foo'}, {name: 'bar'}],
  graveyard: [{name: 'zed'}]
};

it('handles adding a murloc to the graveyard', () => {
  const output = rootReducer(initialState, {type: 'KILL', i: 0})
  expect(output).toEqual({
    deck: [{name: 'foo'}, {name: 'bar'}],
    graveyard: [{name: 'zed'}, {name: 'foo'}]
  })
});
