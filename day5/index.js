const input = require('./testInput');

const dayFivePartOne = () => {

  const mainInput = input.crates.split('\n');

  const moveCrates = (crateInput) => {
    console.log(crateInput);

    let initialCrateLayout = crateInput.slice(0, crateInput.indexOf(''));
    console.log(initialCrateLayout);
    let moveList = crateInput.slice(crateInput.indexOf('') + 1);
    console.log(moveList);
  }

  moveCrates(mainInput);
}

dayFivePartOne();