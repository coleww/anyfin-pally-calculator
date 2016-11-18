ANYFIN-PALLY-CALCULATOR
---------------------------------------

A handy dandy UI for tracking yr potential burst damage in hearthstone. 
Because I got tired of counting my murlocs every turn. 
Built with react and redux.

![demo.gif](./demo.gif)

### HOW 2 USE

- when a murloc dies, click on it! for non-bluegill/warleader murlocs, just click the tinyfin
- increase/decrease the "open spots" option if you already have minions on the board
- the app will calculate the min/max burst damage you can get from casting Anyfin Can Happen


### FAQ:

- Q: is this cheating?
- A: nah, blizzard says deck tracks that do anything you could do with pen and paper are OK.

### development

- `npm install` // download all them sweet sweet dependencies

- `npm run start` // fire up the dev server
- `npm run test` // will run any test files in `./src` that end in `.test.js`
- `npm run build` // bundles up a production version of the app

### TODO

- make the min/max damage algorithm more clever. currently it grinds the app to a halt once there are >20 cards in the graveyard.
- handle Old Murk-Eye as well

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
