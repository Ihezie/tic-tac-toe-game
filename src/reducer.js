const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "PLAY A TURN":
      const newTileValues = [...state.tileValues];
      newTileValues[payload.rowIndex][payload.columnIndex] = state.currentTurn;
      const winningTiles = checkPlayerWin(newTileValues, state.currentTurn);
      if (winningTiles.length !== 0) {
        console.log(winningTiles);
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
  tileValues.some((row, rowIndex) => {
    if (row.every((value) => value === player)) {
      winningTiles = row.map((_, columnIndex) => `${rowIndex}-${columnIndex}`);
    }
  });
  if (winningTiles.length !== 0) {
    return winningTiles;
  }
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
  return winningTiles;
};
