import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGameData } from "../AppProvider";
import { useEffect } from "react";
import initialRenderVariants from "../variants";
import robotMove from "../robotMove";

const GameGrid = () => {
  const { gameState, dispatch } = useGameData();

  const { tileValues, winningTiles, currentTurn, gameMode, stats, gameDifficulty } = gameState;

  const handleClick = (rowIndex, columnIndex) => {
    //Checks whether the current playerName is equal to "you" ONLY in Human vs Robot mode.
    let extraCondition = true;
    if (gameMode === 1) {
      extraCondition = stats[currentTurn].playerName === "you";
    }
    //End
    if (
      !tileValues[rowIndex][columnIndex] &&
      winningTiles.length === 0 &&
      extraCondition
    ) {
      dispatch({ type: "PLAY A TURN", payload: { rowIndex, columnIndex } });
    }
  };
  //Handle Human vs Robot Mode
  useEffect(() => {
    let id = null;
    if (
      gameMode === 1 &&
      stats[currentTurn].playerName === "robot" &&
      winningTiles.length === 0
    ) {
      id = setTimeout(() => {
        const { r: rowIndex, c: columnIndex } = robotMove(
          tileValues,
          currentTurn,
          gameDifficulty
        );
        dispatch({
          type: "PLAY A TURN",
          payload: { rowIndex, columnIndex },
        });
      }, 1000);
    }
    return () => {
      clearTimeout(id);
    };
  }, [tileValues]);

  return (
    <motion.section
      className="mt-8 grid grid-cols-3 grid-rows-3 w-[90vw] h-[90vw] min-h-[288px] min-w-[288px] gap-x-4 gap-y-6 xs:w-full xs:h-[405px] sm:h-[450px] sm:mt-6 sm:gap-x-5"
      initial="hide"
      animate="show"
      transition={{
        staggerChildren: 0.1,
      }}
    >
      {tileValues.map((row, rowIndex) => {
        return row.map((tileValue, columnIndex) => {
          const id = `${rowIndex}-${columnIndex}`;
          const active = winningTiles.includes(id);
          let activeStyle = "";
          if (active && currentTurn === "x") {
            activeStyle = "bg-robin-egg-blue";
          } else if (active && currentTurn === "o") {
            activeStyle = "bg-xanthous";
          }
          return (
            <motion.div
              key={id}
              variants={initialRenderVariants}
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 0.4,
              }}
              onClick={() => {
                handleClick(rowIndex, columnIndex);
              }}
            >
              <div
                className={`bg-gunmetal h-full rounded-xl shadow-[0_10px] shadow-black/30 flex justify-center items-center sm:rounded-2xl sm:shadow-[0_8px] sm:shadow-black/25 cursor-pointer my-transition ${activeStyle}`}
              >
                {tileValue && (
                  <GameIcon tileValue={tileValue} active={active} />
                )}
              </div>
            </motion.div>
          );
        });
      })}
    </motion.section>
  );
};
export default GameGrid;

const GameIcon = ({ tileValue, active }) => {
  const variants = {
    show: {
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        mass: 0.45,
        damping: 7.9,
        stiffness: 120,
      },
    },
    hide: {
      scale: 0,
    },
  };
  return (
    <motion.div initial="hide" animate="show" variants={variants}>
      {tileValue === "x" ? (
        <FontAwesomeIcon
          icon="x"
          className={`h-11 sm:h-[60px] x-icon-v1 ${
            active ? "text-gunmetal" : ""
          }`}
        />
      ) : (
        <FontAwesomeIcon
          icon="o"
          className={`h-11 sm:h-[60px] o-icon-v1 ${
            active ? "text-gunmetal" : ""
          }`}
        />
      )}
    </motion.div>
  );
};
