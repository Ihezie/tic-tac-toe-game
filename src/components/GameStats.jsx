import { motion } from "framer-motion";

const GameStats = ({ initialRenderVariants }) => {
  const { container, child } = initialRenderVariants;

  const stats = [
    {
      title: "X (player 1)",
      score: 0,
      bgColor: "bg-robin-egg-blue",
    },
    {
      title: "ties",
      score: 0,
      bgColor: "bg-powder-blue",
    },
    {
      title: "O (player 2)",
      score: 0,
      bgColor: "bg-xanthous",
    },
  ];
  return (
    <motion.section
      className="mt-6 grid grid-cols-3 gap-x-4 sm:gap-5"
      variants={container}
      initial="hide"
      animate="show"
    >
      {stats.map((item, index) => (
        <motion.div
          key={index}
          className={`text-center ${item.bgColor} h-[72px] flex flex-col items-center justify-center rounded-xl`}
          variants={child}
        >
          <span className="text-sm uppercase">{item.title}</span>
          <h2 className="text-2xl font-bold">{item.score}</h2>
        </motion.div>
      ))}
    </motion.section>
  );
};
export default GameStats;
