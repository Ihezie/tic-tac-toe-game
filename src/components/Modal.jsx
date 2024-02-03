import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animate, motion } from "framer-motion";

const Modal = ({ gameState, dispatch }) => {
  const {
    modalData: { winner },
    stats,
  } = gameState;
  return (
    <motion.section
      className="fixed w-screen h-screen z-20 top-0 left-0 bg-black/45 grid place-items-center"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.4,
        when: "beforeChildren",
      }}
    >
      <motion.div
        className="w-full bg-gunmetal text-center pt-5 py-7 flex flex-col gap-4 sm:py-10"
        initial={{
          x: "100%",
        }}
        animate={{
          x: "0%",
        }}
        transition={{
          duration: 0.4,
        }}
      >
        {winner && (
          <h2 className="uppercase font-bold text-powder-blue sm:font-extrabold">
            {`${stats[winner].playerName} won!`}
          </h2>
        )}
        <h1
          className={`uppercase ${
            winner ? stats[winner].textColor : "text-powder-blue"
          } font-bold text-xl flex justify-center items-center gap-4 sm:text-4xl sm:font-extrabold lg:text-5xl`}
        >
          {winner ? (
            <>
              <FontAwesomeIcon
                icon={winner}
                className={`h-7 ${
                  winner === "x" ? "x-icon-v1" : "o-icon-v1"
                } sm:h-12 md:h-14 md:mr-3 lg:h-20`}
              />
              takes the round
            </>
          ) : (
            "It's a tie!"
          )}
        </h1>
        <div className="flex justify-center gap-5 items-center">
          <motion.button
            onClick={() => {
              dispatch({ type: "RESET GAME" });
            }}
            whileHover={{
              rotate: -8,
            }}
            whileTap={{
              scale: 0.85,
            }}
            transition={{
              duration: 0.35,
            }}
            type="button"
            className="bg-powder-blue text-sm justify-self-end rounded-lg shadow-[0_5px] shadow-powder-blue/50 cursor-pointer py-3 px-4 uppercase font-extrabold sm:py-3 lg:text-base"
          >
            quit
          </motion.button>
          <motion.button
            onClick={() => {
              dispatch({ type: "NEXT ROUND" });
            }}
            whileHover={{
              rotate: -8,
            }}
            whileTap={{
              scale: 0.85,
            }}
            transition={{
              duration: 0.35,
            }}
            type="button"
            className="bg-xanthous text-sm justify-self-end rounded-lg shadow-[0_5px] shadow-xanthous/50 cursor-pointer py-3 px-4 uppercase font-extrabold lg:text-base"
          >
            next round
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
};
export default Modal;
