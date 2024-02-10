import { motion } from "framer-motion";
import { useGameData } from "../AppProvider";
import initialRenderVariants from "../variants";

const GameStats = () => {
  const {
    gameState: { stats },
  } = useGameData();

  return (
    <motion.section
      className="mt-6 grid grid-cols-3 gap-x-4 sm:gap-5"
      initial="hide"
      animate="show"
    >
      {Object.entries(stats).map((item) => {
        const [key, stat] = item;
        return (
          <motion.div
            key={key}
            className={`text-center ${stat.bgColor} h-[72px] flex flex-col items-center justify-center rounded-xl`}
            variants={initialRenderVariants}
          >
            <span className="text-[13px] sm:text-sm uppercase font-medium">
              {stat.playerName ? `${key} (${stat.playerName})` : key}
            </span>
            <h2 className="text-2xl font-bold">{stat.score}</h2>
          </motion.div>
        );
      })}
    </motion.section>
  );
};
export default GameStats;
