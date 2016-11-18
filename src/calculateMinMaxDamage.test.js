import calculateMinMaxDamage from './calculateMinMaxDamage';

it('handles empty input', () => {
  const output = calculateMinMaxDamage(1, []);
  expect(output).toEqual({minDamage: {damage: 0, cards: []}, maxDamage: {damage: 0, cards: []}});
});

it('handles the simplest case', () => {
  const output = calculateMinMaxDamage(7, [{name: 'Bluegill Warrior'}]);
  expect(output).toEqual({
    minDamage: {damage: 2, cards: [{name: 'Bluegill Warrior'}]},
    maxDamage: {damage: 2, cards: [{name: 'Bluegill Warrior'}]}
  });
});

it('finds min and max combos', () => {
  const output = calculateMinMaxDamage(1, [
    {name: 'Bluegill Warrior'},
    {name: 'Murloc Warleader'}
  ]);
  expect(output).toEqual({
    minDamage: {damage: 0, cards: [{name: 'Murloc Warleader'}]},
    maxDamage: {damage: 2, cards: [{name: 'Bluegill Warrior'}]}
  });
});


it('calculates buffs properly', () => {
  const output = calculateMinMaxDamage(2, [
    {name: 'Bluegill Warrior'},
    {name: 'Murloc Warleader'},
    {name: 'Murloc Warleader'}
  ]);
  expect(output).toEqual({
    minDamage: {damage: 0, cards: [{name: 'Murloc Warleader'}, {name: 'Murloc Warleader'}]},
    maxDamage: {damage: 4, cards: [{name: 'Bluegill Warrior'}, {name: 'Murloc Warleader'}]}
  });
});

it('handles bringing them all back correctly', () => {
  const output = calculateMinMaxDamage(7, [
    {name: 'Bluegill Warrior'},
    {name: 'Murloc Warleader'},
    {name: 'Murloc Warleader'}
  ]);
  expect(output).toEqual({
    minDamage: {damage: 6, cards: [{name: 'Bluegill Warrior'}, {name: 'Murloc Warleader'}, {name: 'Murloc Warleader'}]},
    maxDamage: {damage: 6, cards: [{name: 'Bluegill Warrior'}, {name: 'Murloc Warleader'}, {name: 'Murloc Warleader'}]}
  });
});

// it('calculates odds', () => {

// })

// it('handles Old Murk-Eye', () => {

// })