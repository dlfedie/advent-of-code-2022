const input = require('./day3input');

const dayThreePartOne = () => {

  const mainInput = input.rucksacks.split('\n');

  // const printf = (obj) =>
  //   obj instanceof Error
  //     ? console.error(obj)
  //     : console.log(JSON.stringify(obj, null, 2));

  const sumOfPriorities = (puzzleInput) => {
    let totalPriorities = 0;
    for (let rucksack of puzzleInput) {
      let commonLetter = compareCompartments(rucksack);
      let priority = calculatePriority(commonLetter);
      totalPriorities = totalPriorities + priority;
    }

    console.log('totals: ', totalPriorities);
  }

  const compareCompartments = (rucksack) => {
    const firstPartOfRucksack = rucksack.slice(0, rucksack.length/2);
    const secondPartOfRucksack = rucksack.slice(rucksack.length/2, rucksack.length);
    // console.log('whole: ', rucksack);
    // console.log('first: ', firstPartOfRucksack);
    // console.log('second: ', secondPartOfRucksack);
    let commonLetter = '';
    for (let letter of firstPartOfRucksack) {
      if (secondPartOfRucksack.includes(letter)) {
        commonLetter = letter;
        break;
      }
    }
    // console.log(commonLetter);
    return commonLetter;
  }

  const calculatePriority = (letter) => {
    // charCodeAt returns ascii value.. a = 97, A = 65
    let charCode = letter.charCodeAt(0);
    if (charCode < 97) {
      // console.log(charCode - 38);
      return charCode - 38;
    } else {
      // console.log(charCode - 96);
      return charCode - 96;
    }

  }

  sumOfPriorities(mainInput);
};



dayThreePartOne();