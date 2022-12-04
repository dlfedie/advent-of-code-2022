const input = require('./day2input');

const dayTwoPartOne = () => {

  const mainInput = input.rps.split('\n');

  // const printf = (obj) =>
  //   obj instanceof Error
  //     ? console.error(obj)
  //     : console.log(JSON.stringify(obj, null, 2));

  function checkStratGuide(puzzleInput) {

    let totalScore = 0;

    for (let i = 0; i < puzzleInput.length; i++) {
      let outcomeScore = checkWinDrawLoss(puzzleInput[i]);
      let shapeScore = checkShapeScore(puzzleInput[i]);
      totalScore = totalScore + outcomeScore + shapeScore;
    }
    console.log('part1 score: ', totalScore);
  }

  function checkWinDrawLoss(roundInput) {
    // results can be 'W', 'D', 'L'
    let roundResult = '';
    // A = rock, B = paper, C = scissors, X = rock, Y = paper, C = scissors
    if (roundInput === 'A X') {
      roundResult = 'D'
    } else if (roundInput === 'A Y') {
      roundResult = 'W'
    } else if (roundInput === 'A Z') {
      roundResult = 'L'
    } else if (roundInput === 'B X') {
      roundResult = 'L'
    } else if (roundInput === 'B Y') {
      roundResult = 'D'
    } else if (roundInput === 'B Z') {
      roundResult = 'W'
    } else if (roundInput === 'C X') {
      roundResult = 'W'
    } else if (roundInput === 'C Y') {
      roundResult = 'L'
    } else if (roundInput === 'C Z') {
      roundResult = 'D'
    }

    return calculateRoundScore(roundResult);
  }

  function checkShapeScore(roundInput) {
    // rockX = 1, paperY = 2, scissorsZ = 3
    if (roundInput.includes('X')) {
      return 1;
    } else if (roundInput.includes('Y')) {
      return 2;
    } else if (roundInput.includes('Z')) {
      return 3;
    } else {
      return 0;
    }
  }

  function calculateRoundScore(roundResult) {
    if (roundResult === 'W') {
      return 6;
    } else if (roundResult === 'D') {
      return 3;
    } else if (roundResult === 'L') {
      return 0;
    } else {
      return 0;
    }
  }

  checkStratGuide(mainInput);
};


const dayTwoPartTwo = () => {

  const mainInput = input.rps.split('\n');

  function checkStratGuide(puzzleInput) {

    let totalScore = 0;

    for (let i = 0; i < puzzleInput.length; i++) {
      let symbolToPick = checkWhichToPick(puzzleInput[i]);
      let roundOutcome = checkRoundOutcomeScore(puzzleInput[i]);
      let shapeScore = checkShapeScore(symbolToPick);
      totalScore = totalScore + roundOutcome + shapeScore;
    }
    console.log('part2 score: ', totalScore);
  }

  function checkWhichToPick(roundInput) {
    // X means Lose, Y means Draw, Z means Win
    let symbolToPick = '';
    // A = rock, B = paper, C = scissors
    if (roundInput === 'A X') {
      symbolToPick = 'C'
    } else if (roundInput === 'A Y') {
      symbolToPick = 'A'
    } else if (roundInput === 'A Z') {
      symbolToPick = 'B'
    } else if (roundInput === 'B X') {
      symbolToPick = 'A'
    } else if (roundInput === 'B Y') {
      symbolToPick = 'B'
    } else if (roundInput === 'B Z') {
      symbolToPick = 'C'
    } else if (roundInput === 'C X') {
      symbolToPick = 'B'
    } else if (roundInput === 'C Y') {
      symbolToPick = 'C'
    } else if (roundInput === 'C Z') {
      symbolToPick = 'A'
    }

    return symbolToPick;
  }
  
  function checkRoundOutcomeScore(roundInput) {
    // X = lose, Y = draw, Z = win
    if (roundInput.includes('X')) {
      return 0;
    } else if (roundInput.includes('Y')) {
      return 3;
    } else if (roundInput.includes('Z')) {
      return 6;
    } else {
      return 0;
    }
  }

  function checkShapeScore(roundInput) {
    // rockA = 1, paperB = 2, scissorsC = 3
    if (roundInput.includes('A')) {
      return 1;
    } else if (roundInput.includes('B')) {
      return 2;
    } else if (roundInput.includes('C')) {
      return 3;
    } else {
      return 0;
    }
  }

  checkStratGuide(mainInput);
};

dayTwoPartOne();
dayTwoPartTwo();