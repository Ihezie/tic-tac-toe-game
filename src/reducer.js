const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "PLAY A TURN":
      const newTileValues = [...state.tileValues];
      newTileValues[payload.rowIndex][payload.columnIndex] = state.currentTurn;
      const winningTiles = checkPlayerWin(newTileValues, state.currentTurn);
      if (winningTiles.length !== 0) {
        return {
          ...state,
          tileValues: newTileValues,
          winningTiles,
        };
      }
      return {
        ...state,
        currentTurn: state.currentTurn === "x" ? "o" : "x",
        tileValues: newTileValues,
      };
    default:
      console.log("unexpected action type");
  }
};

export default reducer;

const checkPlayerWin = (tileValues, player) => {
  let winningTiles = [];
  // WIN STATE 1
  tileValues.some((row, rowIndex) => {
    if (row.every((value) => value === player)) {
      winningTiles = row.map((_, columnIndex) => `${rowIndex}-${columnIndex}`);
    }
  });
  if (winningTiles.length !== 0) {
    return winningTiles;
  }
  // WIN STATE 2
  const transTileValues = tileValues.map((row, rowIndex) =>
    row.map((_, columnIndex) => {
      return tileValues[columnIndex][rowIndex];
    })
  );
  transTileValues.some((row, rowIndex) => {
    if (row.every((value) => value === player)) {
      winningTiles = row.map((_, columnIndex) => `${columnIndex}-${rowIndex}`);
    }
  });
  if (winningTiles.length !== 0) {
    return winningTiles;
  }
  // WIN STATE 3
  const createDiagonalArray = (array) => {
    return array.map((row, rowIndex) => {
      return row.find((_, columnIndex) => columnIndex === rowIndex);
    });
  };
  const diagonalOne = createDiagonalArray(tileValues);
  if (diagonalOne.every((value) => value === player)) {
    winningTiles = diagonalOne.map(
      (_, columnIndex) => `${columnIndex}-${columnIndex}`
    );
    return winningTiles;
  }
  // WIN STATE 4
  const reversedTileValues = tileValues.map((row) => [...row].reverse());
  const diagonalTwo = createDiagonalArray(reversedTileValues);
  if (diagonalTwo.every((value) => value === player)) {
    winningTiles = diagonalTwo.map((_, columnIndex) => {
      const winningTile = `${columnIndex}-${2 - columnIndex}`;
      return winningTile;
    });
    return winningTiles;
  }

  return winningTiles;
};
