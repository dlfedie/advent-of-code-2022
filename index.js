const input = require("./day1part1input");

// const dayOnePartOne = () => {
//   console.log('woo');

//   let mainInput = input.elves.split('\n');

//   function calculateMostElfCalories(puzzleInput) {
//     let highestTotal = 0;
//     let currentTotal = 0;

//     for (let i = 0; i < puzzleInput.length; i++) {

//       if (puzzleInput[i] == '') {
//         highestTotal = (currentTotal > highestTotal) ? currentTotal : highestTotal;
//         currentTotal = 0;
//       } else {
//         // console.log('to int: ', Number(puzzleInput[i]));

//         currentTotal = currentTotal + Number(puzzleInput[i]);
//       }
//     }
//     // below is needed to capture final elf's total
//     highestTotal = (currentTotal > highestTotal) ? currentTotal : highestTotal;

//     console.log('highest: ', highestTotal);


//   }
//   calculateMostElfCalories(mainInput);
// }

const dayOnePartTwo = () => {
  console.log('yeah');

  let mainInput = input.elves.split('\n');

  function calculateTopThreeElfCalories(puzzleInput) {
    let elfTotals = [];
    let currentTotal = 0;

    for (let i = 0; i < puzzleInput.length; i++) {

      if (puzzleInput[i] == '') {
        elfTotals.push(currentTotal);
        currentTotal = 0;
      } else {
        // console.log('to int: ', +(puzzleInput[i]));

        currentTotal = currentTotal + +(puzzleInput[i]);
      }
    }
    // below is needed to capture final elf's total
    elfTotals.push(currentTotal);

    // console.log('totals: ', elfTotals);

    let descSortedElfTotals = elfTotals.sort((a, b) => {
      return b - a;
    });

    // console.log('sorted: ', descSortedElfTotals);
    let topTotal = descSortedElfTotals[0];
    let topThreeTotals = descSortedElfTotals[0] + descSortedElfTotals[1] + descSortedElfTotals[2];
    console.log('top: ', topTotal);
    console.log('top three: ', topThreeTotals);

  }
  calculateTopThreeElfCalories(mainInput);
}

// dayOnePartOne();
dayOnePartTwo();