const checkPlayerWin = (tileValues, player) => {
  let winningTiles = [];
  const checkEquality = (a, b, c) => {
    if (a === player && b === player && c === player) {
      return true;
    } else {
      return false;
    }
  };
  // HORIZONTALS
  tileValues.some((row, rowIndex) => {
    if (row.every((value) => value === player)) {
      winningTiles = row.map((_, columnIndex) => `${rowIndex}-${columnIndex}`);
      return true;
    }
  });
  if (winningTiles.length !== 0) {
    return winningTiles;
  }
  // VERTICALS
  tileValues.some((_, rowIndex) => {
    if (
      checkEquality(
        tileValues[0][rowIndex],
        tileValues[1][rowIndex],
        tileValues[2][rowIndex]
      )
    ) {
      winningTiles = [
        `${0}-${rowIndex}`,
        `${1}-${rowIndex}`,
        `${2}-${rowIndex}`,
      ];
      return true;
    }
  });
  if (winningTiles.length !== 0) {
    return winningTiles;
  }
  // DIAGONALS

  // DIAGONAL ONE
  if (checkEquality(tileValues[0][0], tileValues[1][1], tileValues[2][2])) {
    winningTiles = ["0-0", "1-1", "2-2"];
    return winningTiles;
  }
  // DIAGONAL TWO
  if (checkEquality(tileValues[0][2], tileValues[1][1], tileValues[2][0])) {
    winningTiles = ["0-2", "1-1", "2-0"];
    return winningTiles;
  }
  return winningTiles;
};

export default checkPlayerWin