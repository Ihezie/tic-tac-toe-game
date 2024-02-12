import { initialState } from "./AppProvider";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "PLAY A TURN": {
      const { currentTurn, tileValues, stats } = state;
      const newTileValues = JSON.parse(JSON.stringify(tileValues));
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
    }
    case "GO BACK":
      return initialState;
    case "RESET GAME": {
      const newStats = JSON.parse(JSON.stringify(state.stats));
      newStats.x.score = 0;
      newStats.o.score = 0;
      return {
        ...state,
        tileValues: initialState.tileValues,
        stats: newStats,
        currentTurn: state.startingPlayer,
      };
    }
    case "NEXT ROUND":
      return {
        ...state,
        currentTurn: state.startingPlayer,
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
    case "SET GAME MODE": {
      const newStats = JSON.parse(JSON.stringify(state.stats));
      if (payload === 1) {
        newStats.x.playerName = "you";
        newStats.o.playerName = "robot";
      } else if (payload === 2) {
        newStats.x.playerName = "Player 1";
        newStats.o.playerName = "Player 2";
      }
      return {
        ...state,
        gameMode: payload,
        stats: newStats,
      };
    }
    case "UPDATE PLAYER NAME": {
      const { value, icon } = payload;
      const newStats = JSON.parse(JSON.stringify(state.stats));
      if (!(value.length > 10)) {
        newStats[icon].playerName = value;
      }
      return {
        ...state,
        stats: newStats,
      };
    }
    case "START GAME":
      return {
        ...state,
        showMainGame: true,
      };
    case "SET HUMAN AND ROBOT ICONS": {
      const newStats = JSON.parse(JSON.stringify(state.stats));
      newStats[payload].playerName = "you";
      const robotIcon = payload === "o" ? "x" : "o";
      newStats[robotIcon].playerName = "robot";
      return {
        ...state,
        stats: newStats,
      };
    }
    default:
      console.log("unexpected action type");
  }
};

export default reducer;

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
      return true
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
      return true
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
