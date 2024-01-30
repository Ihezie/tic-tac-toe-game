import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faXmark,
  faO,
  faX,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(faXmark, faO, faX, faRotateRight);

import GameHeader from "./components/GameHeader";
import GameGrid from "./components/GameGrid";
import GameStats from "./components/GameStats";
import reducer from "./reducer";
import { useReducer } from "react";

function App() {
  const initialRenderVariants = {
    container: {
      show: {
        scale: 1,
      },
      hide: {
        scale: 1,
      },
    },
    child: {
      show: {
        scale: 1,
        transition: {
          duration: 0.8,
          type: "spring",
          mass: 0.45,
          damping: 7.9,
          stiffness: 120,
        },
      },
      hide: {
        scale: 0,
      },
    },
  };
  const initialState = {
    currentTurn: "x",
    tileValues: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    winState: false,
  };
  const [gameState, dispatch] = useReducer(reducer, initialState);

  return (
    <main className=" px-[5%] pt-5 min-w-[320px] max-w-[450px] xs:mx-auto sm:px-0 sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:max-w-none sm:w-[450px]">
      <GameHeader
        initialRenderVariants={initialRenderVariants}
        gameState={gameState}
        dispatch={dispatch}
      />
      <GameGrid
        initialRenderVariants={initialRenderVariants}
        gameState={gameState}
        dispatch={dispatch}
      />
      <GameStats initialRenderVariants={initialRenderVariants} />
    </main>
  );
}

export default App;
