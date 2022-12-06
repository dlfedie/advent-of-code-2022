const input = require('./testInput');

const dayFourPartOne = () => { 

  const mainInput = input.pairs.split('\n');

  const checkForOverlap = (assignmentPairs) => {
    console.log(assignmentPairs);

    for (let pair of assignmentPairs) {
      // split on the comma, sort also so lowest starting is on the left
      let firstSplit = pair.split(',').sort();
      console.log(firstSplit)
      let lowFirst = Number(firstSplit[0].split('-')[0]);
      let highFirst = Number(firstSplit[0].split('-')[1]);
      console.log('low: ', lowFirst, ' high: ', highFirst);
    }
  }

  checkForOverlap(mainInput);
}


dayFourPartOne();
