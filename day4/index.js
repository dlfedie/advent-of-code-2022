const input = require('./day4Input');

const dayFourPartOne = () => { 

  const mainInput = input.pairs.split('\n');

  const checkForOverlap = (assignmentPairs) => {
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
    console.log('pairs where one covers another: ', rangeFullyCovered);
  }

  checkForOverlap(mainInput);
}


dayFourPartOne();
