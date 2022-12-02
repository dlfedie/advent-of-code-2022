const input = require("./day1part1input");

const day1 = () => {
  console.log('woo');

  let mainInput = input.elves.split('\n');

  function calculateMostElfCalories(puzzleInput) {
    let highestTotal = 0;
    let currentTotal = 0;

    for (let i = 0; i < puzzleInput.length; i++) {

      if (puzzleInput[i] == '') {
        highestTotal = (currentTotal > highestTotal) ? currentTotal : highestTotal;
        currentTotal = 0;
      } else {
        // console.log('to int: ', Number(puzzleInput[i]));

        currentTotal = currentTotal + Number(puzzleInput[i]);
      }
    }
    // below is needed to capture final elf's total
    highestTotal = (currentTotal > highestTotal) ? currentTotal : highestTotal;

    console.log('highest: ', highestTotal);


  }
  calculateMostElfCalories(mainInput);
}

day1();
