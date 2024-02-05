import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useGameData } from "../AppProvider";


const GameHeader = ({ initialRenderVariants}) => {
  const { container, child } = initialRenderVariants;
  const { gameState:{currentTurn}, dispatch } = useGameData();

  return (
    <motion.header
      className="grid grid-cols-3 gap-4 items-center sm:gap-5"
      variants={container}
      initial="hide"
      animate="show"
    >
      <motion.div className="flex gap-1" variants={child}>
        <FontAwesomeIcon icon="x" className="x-icon-v1 w-8 h-8" />
        <FontAwesomeIcon icon="o" className="o-icon-v1 w-8 h-8" />
      </motion.div>
      <motion.div
        className="bg-gunmetal shadow-[0_5px] shadow-black/40 text-powder-blue flex items-center justify-center gap-2 font-extrabold tracking-wide h-10 rounded-md sm:h-11 sm:rounded-lg"
        variants={child}
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
        variants={child}
        className="bg-powder-blue justify-self-end w-11 h-10 flex justify-center items-center rounded shadow-[0_5px] shadow-powder-blue/50 cursor-pointer sm:h-11 sm:w-12 sm:rounded-lg"
      >
        <FontAwesomeIcon
          icon="rotate-right"
          className="my-transition w-5 h-5 sm:w-6 sm:h-6"
        />
      </motion.button>
    </motion.header>
  );
};
export default GameHeader;
