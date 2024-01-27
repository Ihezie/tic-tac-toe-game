import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const GameHeader = () => {
  return (
    <header className="grid grid-cols-3 gap-4 items-center">
      <div className="flex gap-1">
        <FontAwesomeIcon icon="x" className="x-icon-v1 w-8 h-8" />
        <FontAwesomeIcon icon="o" className="o-icon-v1 w-8 h-8" />
      </div>
      <div className="bg-gunmetal shadow-[0_5px] shadow-black/40 text-powder-blue flex items-center justify-center gap-2 font-extrabold tracking-wide h-10 rounded-md sm:h-11 sm:rounded-lg">
        <FontAwesomeIcon icon="x" className="stroke-[50] stroke-current" />
        TURN
      </div>
      <motion.button
        whileTap={{
          scale: 0.9,
        }}
        whileHover={{
          backgroundColor: "#F2B237ff",
          boxShadow: "0 5px #f2b23799",
        }}
        className="bg-powder-blue justify-self-end w-11 h-10 flex justify-center items-center rounded shadow-[0_5px] shadow-powder-blue/50 cursor-pointer group sm:h-11 sm:w-12 sm:rounded-lg"
      >
        <FontAwesomeIcon
          icon="rotate-right"
          className="my-transition sm:group-hover:rotate-90 w-5 h-5 sm:w-6 sm:h-6"
        />
      </motion.button>
    </header>
  );
};
export default GameHeader;
