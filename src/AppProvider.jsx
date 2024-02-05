import { useReducer, createContext, useContext } from "react"
import reducer from "./reducer";

const AppContext = createContext()

const AppProvider = ({children}) => {
      const initialState = {
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
      const [gameState, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{gameState, dispatch}}>
        {children}
    </AppContext.Provider>
  )
}
export default AppProvider

export const useGameData = ()=>{
    return useContext(AppContext)
}