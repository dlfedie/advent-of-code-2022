const input = require('./day2input');

const dayTwoPartOne = () => {

  const mainInput = input.rps.split('\n');

  const printf = (obj) =>
    obj instanceof Error
      ? console.error(obj)
      : console.log(JSON.stringify(obj, null, 2));

  function checkStratGuide(puzzleInput) {

    let totalScore = 0;

    for (let i = 0; i < puzzleInput.length; i++) {
      let outcomeScore = checkWinDrawLoss(puzzleInput[i]);
      let shapeScore = checkShapeScore(puzzleInput[i]);
      totalScore = totalScore + outcomeScore + shapeScore;
    }
    console.log(totalScore);
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

dayTwoPartOne();
