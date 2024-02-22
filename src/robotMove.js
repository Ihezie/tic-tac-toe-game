import checkPlayerWin from "./checkPlayerWin";

export default function robotMove(tileValues, currentTurn, gameDifficulty) {
  const localTileValues = JSON.parse(JSON.stringify(tileValues));
  const difficultyValues = {
    easy: 1,
    medium: 2,
    impossible: 9,
  };
  const robotTurn = currentTurn;
  const humanTurn = currentTurn === "x" ? "o" : "x";
  let bestMove = null;
  let bestScore = -100;
  //r denotes "rowIndex", and c denotes "columnIndex"

  for (let r = 0; r < localTileValues.length; r++) {
    for (let c = 0; c < localTileValues[r].length; c++) {
      if (localTileValues[r][c] === null) {
        localTileValues[r][c] = robotTurn;
        let score = minimax(
          localTileValues,
          0,
          false,
          {
            humanTurn,
            robotTurn,
          },
          difficultyValues[gameDifficulty]
        );
        localTileValues[r][c] = null;
        if (score > bestScore) {
          bestScore = score;
          bestMove = { r, c };
        }
      }
    }
  }
  return bestMove;
}

function minimax(localTileValues, depth, isMaximizing, turns, maxDepth) {
  // Turns can be either 'x' or 'o'
  const { humanTurn, robotTurn } = turns;
  let scores = {
    x: humanTurn === "x" ? -1 : 1,
    o: humanTurn === "o" ? -1 : 1,
    tie: 0,
  };
  let result = null;
  let winningTiles = [];
  for (const turn of Object.values(turns)) {
    winningTiles = checkPlayerWin(localTileValues, turn);
    if (winningTiles.length !== 0) {
      result = turn;
      return scores[result];
    }
  }
  if (
    winningTiles.length === 0 &&
    localTileValues.every((row) => row.every((tile) => tile))
  ) {
    result = "tie";
    return scores[result];
  }
  if (maxDepth === 1) {
    const scoreKeys = Object.keys(scores);
    const randomIndex = Math.floor(Math.random() * scoreKeys.length);
    const randomKey = scoreKeys[randomIndex];
    return scores[randomKey];
  }
  if (depth > maxDepth) {
    const scoreKeys = Object.keys(scores);
    const randomIndex = Math.floor(Math.random() * scoreKeys.length);
    const randomKey = scoreKeys[randomIndex];
    return scores[randomKey];
  }
  if (isMaximizing) {
    let bestScore = -100;
    //r denotes "rowIndex", and c denotes "columnIndex"
    for (let r = 0; r < localTileValues.length; r++) {
      for (let c = 0; c < localTileValues[r].length; c++) {
        if (localTileValues[r][c] === null) {
          localTileValues[r][c] = robotTurn;
          let score = minimax(
            localTileValues,
            depth + 1,
            false,
            turns,
            maxDepth
          );
          localTileValues[r][c] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
    }
    return bestScore;
  } else {
    let bestScore = 100;
    //r denotes "rowIndex", and c denotes "columnIndex"
    for (let r = 0; r < localTileValues.length; r++) {
      for (let c = 0; c < localTileValues[r].length; c++) {
        if (localTileValues[r][c] === null) {
          localTileValues[r][c] = humanTurn;
          let score = minimax(
            localTileValues,
            depth + 1,
            true,
            turns,
            maxDepth
          );
          localTileValues[r][c] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
    }
    return bestScore;
  }
}
