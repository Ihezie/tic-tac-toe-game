import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useGameData } from "../AppProvider";
import initialRenderVariants from "../variants";

const GameHeader = () => {
  const {
    gameState: { currentTurn, gameDifficulty, gameMode },
    dispatch,
  } = useGameData();
  const difficultyColors = {
    easy: "bg-green-400 text-black",
    medium: "bg-yellow-400 text-black",
    impossible: "bg-red-500 text-white",
  };
  return (
    <motion.header initial="hide" animate="show">
      <div className="flex mb-6 justify-between">
        <motion.button
          onClick={() => {
            dispatch({ type: "GO BACK" });
          }}
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.85,
          }}
          transition={{
            duration: 0.35,
          }}
          variants={initialRenderVariants}
          type="button"
          className="bg-powder-blue block text-sm justify-self-end rounded-lg shadow-[0_4px] shadow-powder-blue/50 cursor-pointer py-[10px] px-4 uppercase font-extrabold"
        >
          go home
        </motion.button>
        {gameMode === 1 && (
          <motion.div
            variants={initialRenderVariants}
            className={`px-3 py-[10px] rounded-md uppercase font-extrabold min-w-[105px] text-center text-sm ${difficultyColors[gameDifficulty]}`}
          >
            {gameDifficulty}
          </motion.div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4 items-center sm:gap-5">
        <motion.div className="flex gap-1" variants={initialRenderVariants}>
          <FontAwesomeIcon icon="x" className="x-icon-v1 w-8 h-8" />
          <FontAwesomeIcon icon="o" className="o-icon-v1 w-8 h-8" />
        </motion.div>
        <motion.div
          className="bg-gunmetal shadow-[0_5px] shadow-black/40 text-powder-blue flex items-center justify-center gap-2 font-extrabold tracking-wide h-10 rounded-md sm:h-11 sm:rounded-lg"
          variants={initialRenderVariants}
        >
          {currentTurn === "x" ? (
            <FontAwesomeIcon icon="x" className="stroke-[50] stroke-current" />
          ) : (
            <FontAwesomeIcon icon="o" className="stroke-[50] stroke-current" />
          )}
          TURN
        </motion.div>
        <motion.button
          type="button"
          onClick={() => {
            dispatch({ type: "RESET GAME" });
          }}
          whileTap={{
            scale: 0.9,
          }}
          whileHover={{
            rotate: -15,
          }}
          transition={{
            duration: 0.35,
          }}
          variants={initialRenderVariants}
          className="bg-powder-blue justify-self-end w-11 h-10 flex justify-center items-center rounded shadow-[0_5px] shadow-powder-blue/50 cursor-pointer sm:h-11 sm:w-12 sm:rounded-lg"
        >
          <FontAwesomeIcon
            icon="rotate-right"
            className="my-transition w-5 h-5 sm:w-6 sm:h-6"
          />
        </motion.button>
      </div>
    </motion.header>
  );
};
export default GameHeader;
