const input = require('./day4Input');

const dayFourPartOne = () => { 

  const mainInput = input.pairs.split('\n');

  const checkForFullOverlap = (assignmentPairs) => {
    // console.log(assignmentPairs);
    let rangeFullyCovered = 0;

    for (let pair of assignmentPairs) {
      // split on the comma, sort also so lowest starting is on the left
      let pairSplit = pair.split(',').sort();
      // console.log(pairSplit)
      let lowFirst = Number(pairSplit[0].split('-')[0]);
      let highFirst = Number(pairSplit[0].split('-')[1]);
      // console.log('low first: ', lowFirst, ' high first: ', highFirst);
      let lowSecond = Number(pairSplit[1].split('-')[0]);
      let highSecond = Number(pairSplit[1].split('-')[1]);
      // console.log('low sec: ', lowSecond, ' high sec: ', highSecond);
      // check if either range of #s encompasses the other
      if (lowFirst <= lowSecond && highFirst >= highSecond) {
        rangeFullyCovered++;
      } else if (lowSecond <= lowFirst && highSecond >= highFirst) {
        rangeFullyCovered++;
      }

    }
    console.log('pairs where one fully covers another: ', rangeFullyCovered);
  }

  checkForFullOverlap(mainInput);
}


const dayFourPartTwo = () => { 

  const mainInput = input.pairs.split('\n');

  const checkForAnyOverlap = (assignmentPairs) => {
    // console.log(assignmentPairs);
    let rangeHasCoverage = 0;

    for (let pair of assignmentPairs) {
      // split on the comma, sort also so lowest starting is on the left
      let pairSplit = pair.split(',').sort();
      // console.log(pairSplit)
      let lowFirst = Number(pairSplit[0].split('-')[0]);
      let highFirst = Number(pairSplit[0].split('-')[1]);
      // console.log('low first: ', lowFirst, ' high first: ', highFirst);
      let lowSecond = Number(pairSplit[1].split('-')[0]);
      let highSecond = Number(pairSplit[1].split('-')[1]);
      let firstRange = range(lowFirst, highFirst, 1);
      let secondRange = range(lowSecond, highSecond, 1);
      // console.log(firstRange);
      const intersection = firstRange.filter(num => secondRange.includes(num));
      // console.log('intersect: ', intersection);
      if (intersection.length > 0) {
        rangeHasCoverage++;
      }
      

    }
    console.log('pairs where any coverage: ', rangeHasCoverage);
  }

  // unabashedly copied straight out of MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#sequence_generator_range
  const range = (start, stop, step) =>
    Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

  checkForAnyOverlap(mainInput);
}

dayFourPartOne();
dayFourPartTwo();
