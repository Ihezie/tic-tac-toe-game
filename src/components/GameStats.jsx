import { motion } from "framer-motion";

const GameStats = ({ initialRenderVariants, gameState }) => {
  const { container, child } = initialRenderVariants;

  const { stats } = gameState;

  return (
    <motion.section
      className="mt-6 grid grid-cols-3 gap-x-4 sm:gap-5"
      variants={container}
      initial="hide"
      animate="show"
    >
      {Object.entries(stats).map((item) => {
        const [key, stat] = item;
        return (
          <motion.div
            key={key}
            className={`text-center ${stat.bgColor} h-[72px] flex flex-col items-center justify-center rounded-xl`}
            variants={child}
          >
            <span className="text-sm uppercase font-medium">
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
