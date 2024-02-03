const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "PLAY A TURN":
      const { currentTurn, tileValues, stats } = state;
      const newTileValues = [...tileValues];
      newTileValues[payload.rowIndex][payload.columnIndex] = currentTurn;
      const winningTiles = checkPlayerWin(newTileValues, currentTurn);
      if (winningTiles.length !== 0) {
        const newStats = JSON.parse(JSON.stringify(stats));
        newStats[currentTurn].score = newStats[currentTurn].score + 1;
        return {
          ...state,
          tileValues: newTileValues,
          winningTiles,
          stats: newStats,
          modalData: {
            showModal: true,
            winner: currentTurn,
          },
        };
      }
      if (
        winningTiles.length === 0 &&
        newTileValues.every((row) => row.every((tile) => tile))
      ) {
        const newStats = JSON.parse(JSON.stringify(stats));
        newStats.ties.score = newStats.ties.score + 1;
        return {
          ...state,
          tileValues: newTileValues,
          stats: newStats,
          modalData: {
            showModal: true,
            winner: null,
          },
        };
      }
      return {
        ...state,
        currentTurn: currentTurn === "x" ? "o" : "x",
        tileValues: newTileValues,
      };
    case "RESET GAME":
      return {
        startingPlayer: "x",
        currentTurn: "x",
        tileValues: [
          [null, null, null],
          [null, null, null],
          [null, null, null],
        ],
        winningTiles: [],
        stats: {
          x: {
            playerName: "player 1",
            score: 0,
            bgColor: "bg-robin-egg-blue",
            textColor: "text-robin-egg-blue",
          },
          ties: {
            score: 0,
            bgColor: "bg-powder-blue",
            textColor: "text-powder-blue",
          },
          o: {
            playerName: "player 2",
            score: 0,
            bgColor: "bg-xanthous",
            textColor: "text-xanthous",
          },
        },
        modalData: {
          showModal: false,
          winner: null,
        },
      };
    case "NEXT ROUND":
      const newStartingPlayer = state.startingPlayer === "x" ? "o" : "x";
      return {
        ...state,
        startingPlayer: newStartingPlayer,
        currentTurn: newStartingPlayer,
        tileValues: [
          [null, null, null],
          [null, null, null],
          [null, null, null],
        ],
        winningTiles: [],
        modalData: {
          showModal: false,
          winner: null,
        },
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
