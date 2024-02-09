import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faPerson } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useGameData } from "../AppProvider";
import HumanVsHuman from "./HumanVsHuman";
import HumanVsRobot from "./HumanVsRobot";
import vs from "../assets/vs.png";

const Welcome = () => {
  const {
    gameState: { gameMode },
    dispatch,
  } = useGameData();

  const chooseMode = (mode) => {
    dispatch({ type: "SET GAME MODE", payload: mode });
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
                chooseMode(1);
              }}
              className="w-[150px] h-[150px] text-sm font-bold rounded-2xl shadow-[0_7px] shadow-robin-egg-blue/40 flex flex-col justify-between items-center px-2 py-4 cursor-pointer bg-robin-egg-blue"
            >
              <FontAwesomeIcon icon={faRobot} className="h-16" />
              <h3>
                Human
                <img src={vs} className="inline mx-1 w-[18px]" alt="vs" /> Robot
              </h3>
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
                chooseMode(2);
              }}
              className="w-[150px] h-[150px] text-sm font-bold bg-xanthous rounded-2xl shadow-[0_7px] shadow-xanthous/40 flex flex-col justify-between items-center px-2 py-4 cursor-pointer"
            >
              <FontAwesomeIcon icon={faPerson} className="h-20" />
              <h3>
                Human <img src={vs} className="inline w-[18px] mx-1" alt="vs" />{" "}
                Human
              </h3>
            </motion.div>
          </div>
        </section>
      )}
      {gameMode === 1 && <HumanVsRobot />}
      {gameMode === 2 && <HumanVsHuman />}
    </main>
  );
};
export default Welcome;
