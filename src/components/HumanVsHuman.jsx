import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const HumanVsHuman = () => {
  return (
    <section>
      <h1 className="text-powder-blue font-bold capitalize text-center mb-10 text-xl">
        Choose your Icons
      </h1>
      <section className="flex flex-col gap-10 mb-12">
        <div className="flex items-center justify-between ">
          <div className="w-28 h-28 sm:w-[150px] sm:h-[150px] text-sm font-bold rounded-2xl shadow-[0_7px] shadow-robin-egg-blue/40 flex flex-col justify-center items-center px-2 py-4 cursor-pointer bg-robin-egg-blue stroke-[60] stroke-current">
            <FontAwesomeIcon icon="x" className="h-12 sm:h-16" />
          </div>
          <div className="flex flex-col w-1/2 text-powder-blue h-28 justify-center gap-4">
            <label htmlFor="player2" className="font-bold">
              Player 1:
            </label>
            <input
              id="player1"
              type="text"
              className="bg-gunmetal h-12 rounded-lg px-3 outline-none focus:border-2 focus:border-robin-egg-blue"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-28 h-28 sm:w-[150px] sm:h-[150px] text-sm font-bold rounded-2xl shadow-[0_7px] shadow-xanthous/40 flex  justify-center items-center px-2 py-4 cursor-pointer bg-xanthous ">
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
              id="player2"
              type="text"
              className="bg-gunmetal h-12 rounded-lg px-3 outline-none focus:border-2 focus:border-xanthous"
            />
          </div>
        </div>
      </section>
      <h3 className="text-robin-egg-blue font-bold capitalize text-center mb-10 text-lg">
        Remember x goes first!
      </h3>
      <motion.button
        onClick={() => {
          dispatch({ type: "NEXT ROUND" });
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
        className="bg-xanthous block text-sm justify-self-end rounded-lg shadow-[0_5px] shadow-xanthous/50 cursor-pointer py-3 px-4 uppercase font-extrabold mx-auto lg:text-base"
      >
        start
      </motion.button>
    </section>
  );
};
export default HumanVsHuman;
