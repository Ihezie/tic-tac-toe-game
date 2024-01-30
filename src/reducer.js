const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "PLAY A TURN":
      const newTileValues = [...state.tileValues];
      newTileValues[payload.rowIndex][payload.columnIndex] = state.currentTurn;
      const playerHasWon = checkPlayerWin(newTileValues, state.currentTurn);
      if(playerHasWon){
        console.log('a player has won');
      }
      return {
        currentTurn: state.currentTurn === "x" ? "o" : "x",
        tileValues: newTileValues,
      };
    default:
      console.log("unexpected action type");
  }
};

export default reducer;

const checkPlayerWin = (tileValues, player) => {
  const singleRowMatches = tileValues.find((row, index) =>
    row.every((value) => value === player)
  );
  if(singleRowMatches){
    return true
  }
  
};
