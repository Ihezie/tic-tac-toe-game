import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGameData } from "../AppProvider";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import initialRenderVariants from "../variants";

const HumanVsRobot = () => {
  const {
    gameState: { stats },
    dispatch,
  } = useGameData();

  const handleClick = (icon) => {
    dispatch({ type: "SET HUMAN AND ROBOT ICONS", payload: icon });
  };
  return (
    <motion.section initial="hide" animate="show">
      <motion.h1
        variants={initialRenderVariants}
        className="text-powder-blue font-bold capitalize text-center mb-7 text-xl"
      >
        Choose your Icon
      </motion.h1>
      <section className="flex justify-between mb-12">
        <motion.div
          whileTap={{
            scale: 0.9,
          }}
          className="relative"
          variants={initialRenderVariants}
        >
          {stats.x.playerName === "you" && (
            <FontAwesomeIcon
              icon={faUser}
              className="block mx-auto text-robin-egg-blue h-5 absolute left-1/2 -translate-x-1/2"
            />
          )}
          <div
            onClick={() => {
              handleClick("x");
            }}
            className={`w-28 h-28 sm:w-[150px] sm:h-[150px] text-sm font-bold rounded-2xl shadow-[0_7px] flex flex-col justify-center items-center mt-8 px-2 py-4 cursor-pointer  stroke-[60] stroke-current group hover:text-black hover:bg-robin-egg-blue hover:shadow-robin-egg-blue/40 my-transition duration-200 ${
              stats.x.playerName === "you"
                ? "bg-robin-egg-blue shadow-robin-egg-blue/40 text-black"
                : "bg-gunmetal shadow-black/25 text-powder-blue"
            }`}
          >
            <FontAwesomeIcon
              icon="x"
              className="h-12 sm:h-16 text-current my-transition duration-200"
            />
          </div>
        </motion.div>
        <motion.div
          whileTap={{
            scale: 0.9,
          }}
          className="relative"
          variants={initialRenderVariants}
        >
          {stats.o.playerName === "you" && (
            <FontAwesomeIcon
              icon={faUser}
              className="block mx-auto text-xanthous h-5 absolute left-1/2 -translate-x-1/2"
            />
          )}
          <div
            onClick={() => {
              handleClick("o");
            }}
            className={`w-28 h-28 sm:w-[150px] sm:h-[150px] text-sm font-bold rounded-2xl shadow-[0_7px] flex  justify-center items-center mt-8 px-2 py-4 cursor-pointer hover:text-black hover:bg-xanthous hover:shadow-xanthous/40 my-transition duration-200 ${
              stats.o.playerName === "you"
                ? "!bg-xanthous shadow-xanthous/40"
                : "bg-gunmetal shadow-black/25 text-powder-blue"
            }`}
          >
            <FontAwesomeIcon
              icon="o"
              className="h-12 sm:h-16 stroke-[70] stroke-current text-current my-transition duration-200"
            />
          </div>
        </motion.div>
      </section>
      <motion.h3
        variants={initialRenderVariants}
        className="font-bold capitalize text-center mb-10 bg-powder-blue w-max mx-auto px-3 py-2 rounded-md text-gunmetal"
      >
        Remember x goes first!
      </motion.h3>
      <div className="flex justify-center gap-10">
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
          className="bg-powder-blue block text-sm justify-self-end rounded-lg shadow-[0_5px] shadow-powder-blue/50 cursor-pointer py-3 px-4 uppercase font-extrabold lg:text-base"
        >
          go back
        </motion.button>
        <motion.button
          onClick={() => {
            dispatch({ type: "START GAME" });
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
          variants={initialRenderVariants}
          className="bg-xanthous block text-sm justify-self-end rounded-lg shadow-[0_5px] shadow-xanthous/50 cursor-pointer py-3 px-4 uppercase font-extrabold lg:text-base"
        >
          start
        </motion.button>
      </div>
    </motion.section>
  );
};
export default HumanVsRobot;
