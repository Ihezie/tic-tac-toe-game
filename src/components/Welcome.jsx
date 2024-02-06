import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faPerson } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useGameData } from "../AppProvider";
import HumanVsHuman from "./HumanVsHuman";
import HumanVsRobot from "./HumanVsRobot";

const Welcome = ({ setShowWelcomePage }) => {
  const {
    gameState: { gameMode },
    dispatch,
  } = useGameData();

  const chooseMode = (mode) => {
    dispatch({ type: "CHOOSE GAME MODE", payload: mode });
  };

  return (
    <main className="px-[5%] pt-5 min-w-[320px] max-w-[450px] xs:mx-auto sm:px-0 sm:mt-20 sm:max-w-none sm:w-[450px]">
      <header className="flex justify-between mb-9 uppercase items-center">
        <h1 className="text-3xl font-bold text-xanthous">tic-tac-toe</h1>
        <div className="flex gap-3">
          <FontAwesomeIcon icon="x" className="x-icon-v1 h-7" />
          <FontAwesomeIcon icon="o" className="o-icon-v1 h-7" />
        </div>
      </header>
      {!gameMode && (
        <section>
          <h2 className="text-powder-blue font-bold capitalize text-center mb-10 text-xl">
            Choose game mode
          </h2>
          <div className="flex justify-between flex-col items-center gap-10 sm:flex-row">
            <motion.div
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.9,
              }}
              transition={{
                duration: 0.4,
              }}
              onClick={() => {
                chooseMode("hvr");
              }}
              className="w-[150px] h-[150px] text-sm font-bold rounded-2xl shadow-[0_7px] shadow-robin-egg-blue/40 flex flex-col justify-between items-center px-2 py-4 cursor-pointer bg-robin-egg-blue"
            >
              <FontAwesomeIcon icon={faRobot} className="h-16" />
              <h3>Human vs Robot</h3>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.9,
              }}
              transition={{
                duration: 0.4,
              }}
              onClick={() => {
                chooseMode("hvh");
              }}
              className="w-[150px] h-[150px] text-sm font-bold bg-xanthous rounded-2xl shadow-[0_7px] shadow-xanthous/40 flex flex-col justify-between items-center px-2 py-4 cursor-pointer"
            >
              <FontAwesomeIcon icon={faPerson} className="h-20" />
              <h3>Human vs Human</h3>
            </motion.div>
          </div>
        </section>
      )}
      {gameMode === "hvh" && <HumanVsHuman />}
      {gameMode === "hvr" && <HumanVsRobot />}
    </main>
  );
};
export default Welcome;
