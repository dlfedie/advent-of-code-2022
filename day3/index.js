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

    console.log('total of priorities: ', totalPriorities);
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

const dayThreePartTwo = () => {

  const mainInput = input.rucksacks.split('\n');

  const sumOfPriorities = (puzzleInput) => {
    let totalPriorities = 0;
    
    let firstInGroup = 0;
    let lastInGroup = 3;

    if ((puzzleInput.length % 3) !== 0) {
      console.log('haha, find the right # of elves');
      return 'haha, find the right # of elves';
    }

    let numberOfGroupsOfThreeElves = puzzleInput.length/3;
    // console.log('# of groups: ', numberOfGroupsOfThreeElves);

    for (let i = 0; i < numberOfGroupsOfThreeElves; i++) {
      let groupOfElves = puzzleInput.slice(firstInGroup, lastInGroup);
      let commonLetter = compareRucksacks(groupOfElves);
      // console.log('commonletter: ', commonLetter);
      let priority = calculatePriority(commonLetter);
      totalPriorities = totalPriorities + priority;
      firstInGroup = firstInGroup + 3;
      lastInGroup = lastInGroup + 3;
    }
    
    console.log('total of group priorities: ', totalPriorities);
  }

  const compareRucksacks = (rucksacks) => {
    // let commonLetter = '';
    let firstRucksack = rucksacks[0];
    let secondRucksack = rucksacks[1];
    let thirdRucksack = rucksacks[2];
    // for (let letter of firstRucksack) {
    //   if (secondRucksack.includes(letter) && thirdRucksack.includes(letter)) {
    //     commonLetter = letter;
    //     break;
    //   }
    // }
      

    // below works, too.. not sure which is faster?
    let commonLetter = ([...firstRucksack].filter(letter => 
      secondRucksack.includes(letter) && thirdRucksack.includes(letter)).toString());
    return commonLetter;
  }

  const calculatePriority = (letter) => {
    // charCodeAt returns ascii value.. a = 97, A = 65. we want a = 1, and A = 27, etc.
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
dayThreePartTwo();