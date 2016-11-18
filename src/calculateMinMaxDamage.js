var combinations = require('combinations')

function calculateDamage (cards) {
  let chargers = cards.filter((card) => {
    return card.name === 'Bluegill Warrior'
  })

  let buffers = cards.filter((card) => {
    return card.name === 'Murloc Warleader'
  })

  // each bluegill has 2 attack, each warleader adds 2 attack to each bluegill.
  return chargers.length * (2 + (2 * buffers.length))
}

function calculateMaxDamage (spots, cards) {
  // cards less than spots => all are coming back
  // cards equal to spots => all are coming back
  // cards > spots => spots are coming back


  let maximum = {damage: 0, cards: []}
  let minimum = {damage: 10000, cards: []}

  let allCombos = combinations(cards)

  if (cards.length >= spots) {
    allCombos = allCombos.filter((combo) => {
      return combo.length === spots
    })
  }


  // allCombos = JSON.parse(JSON.stringify(allCombos))

  allCombos.forEach((combo) => {
    let damage = calculateDamage(combo)
    if (damage > maximum.damage) {
      maximum.damage = damage
      maximum.cards = combo
    }
    if (damage <= minimum.damage) {
      minimum.damage = damage
      minimum.cards = combo
    }
  })

  if (cards.length <= spots) minimum = maximum
  return {minDamage: minimum, maxDamage: maximum}
}

export default calculateMaxDamage;