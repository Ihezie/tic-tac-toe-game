import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useGameData } from "../AppProvider";
import { useState, useEffect } from "react";

const HumanVsHuman = () => {
  const {
    gameState: { stats },
    dispatch,
  } = useGameData();

  const { x, o } = stats;

  const onChange = (e, icon) => {
    dispatch({
      type: "UPDATE PLAYER NAME",
      payload: {
        value: e.target.value,
        icon: icon,
      },
    });
  };

  const [errorOne, setErrorOne] = useState(false);
  const [errorTwo, setErrorTwo] = useState(false);

  useEffect(() => {
    if (!stats.x.playerName) {
      setErrorOne(true);
    } else {
      setErrorOne(false);
    }
    if (!stats.o.playerName) {
      setErrorTwo(true);
    } else {
      setErrorTwo(false);
    }
  }, [stats]);

  return (
    <section>
      <h1 className="text-powder-blue font-bold capitalize text-center mb-10 text-xl">
        Choose your Icons
      </h1>
      <section className="flex flex-col gap-10 mb-12">
        <div className="flex items-center justify-between ">
          <div className="w-28 h-28 sm:w-[150px] sm:h-[150px] text-sm font-bold rounded-2xl shadow-[0_7px] shadow-robin-egg-blue/40 flex flex-col justify-center items-center px-2 py-4 bg-robin-egg-blue stroke-[60] stroke-current">
            <FontAwesomeIcon icon="x" className="h-12 sm:h-16" />
          </div>
          <div className="flex flex-col w-1/2 text-powder-blue h-28 justify-center gap-4">
            <label htmlFor="player2" className="font-bold">
              Player 1:
            </label>
            <input
              value={x.playerName}
              onChange={(e) => {
                onChange(e, "x");
              }}
              id="player1"
              type="text"
              className={`bg-gunmetal h-12 rounded-lg px-3 outline-none focus:border-2 focus:border-robin-egg-blue ${
                errorOne ? "border-2 !border-red-500" : ""
              }`}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-28 h-28 sm:w-[150px] sm:h-[150px] text-sm font-bold rounded-2xl shadow-[0_7px] shadow-xanthous/40 flex  justify-center items-center px-2 py-4 bg-xanthous ">
            <FontAwesomeIcon
              icon="o"
              className="h-12 sm:h-16 stroke-[70] stroke-current"
            />
          </div>
          <div className="flex flex-col w-1/2 text-powder-blue h-28 justify-center gap-4">
            <label htmlFor="player2" className="font-bold">
              Player 2:
            </label>
            <input
              value={o.playerName}
              onChange={(e) => {
                onChange(e, "o");
              }}
              id="player2"
              type="text"
              className={`bg-gunmetal h-12 rounded-lg px-3 outline-none focus:border-2 focus:border-xanthous  ${
                errorTwo ? "border-2 !border-red-500" : ""
              }`}
            />
          </div>
        </div>
      </section>
      <h3 className="font-bold capitalize text-center mb-10 text-lg bg-powder-blue w-max mx-auto px-4 py-2 rounded-lg text-gunmetal">
        Remember x goes first!
      </h3>
      <div className="flex justify-center gap-10">
        <motion.button
          onClick={() => {
            dispatch({ type: "RESET GAME" });
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
          type="button"
          className="bg-powder-blue block text-sm justify-self-end rounded-lg shadow-[0_5px] shadow-powder-blue/50 cursor-pointer py-3 px-4 uppercase font-extrabold lg:text-base"
        >
          go back
        </motion.button>
        <motion.button
          onClick={() => {
            if (!(errorOne || errorTwo)) {
              dispatch({ type: "START GAME" });
            }
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
          type="button"
          className="bg-xanthous block text-sm justify-self-end rounded-lg shadow-[0_5px] shadow-xanthous/50 cursor-pointer py-3 px-4 uppercase font-extrabold lg:text-base"
        >
          start
        </motion.button>
      </div>
    </section>
  );
};
export default HumanVsHuman;
