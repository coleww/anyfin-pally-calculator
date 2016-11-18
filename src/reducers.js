const rootReducer = function (state = {}, action) {
  const graveyard = state.graveyard.slice(0);
  const deck = state.deck.slice(0);

  switch (action.type) {
    case 'KILL':
      let cardPlayed = deck[action.i]
      graveyard.push(cardPlayed);
      return {
        deck: deck,
        graveyard: graveyard
      };
    default:
      return state;
  }
}

export default rootReducer;