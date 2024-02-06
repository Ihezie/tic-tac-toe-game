import { AnimatePresence } from "framer-motion";
import GameHeader from "./GameHeader";
import GameGrid from "./GameGrid";
import GameStats from "./GameStats";
import Modal from "./Modal";
import { useGameData } from "../AppProvider";

const MainGame = () => {
  const { gameState } = useGameData();
  const initialRenderVariants = {
    container: {
      show: {
        scale: 1,
      },
      hide: {
        scale: 1,
      },
    },
    child: {
      show: {
        scale: 1,
        transition: {
          duration: 0.8,
          type: "spring",
          mass: 0.45,
          damping: 7.9,
          stiffness: 120,
        },
      },
      hide: {
        scale: 0,
      },
    },
  };
  return (
    <>
      <main className="px-[5%] pt-5 min-w-[320px] max-w-[450px] xs:mx-auto sm:px-0 sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:max-w-none sm:w-[450px]">
        <GameHeader initialRenderVariants={initialRenderVariants} />
        <GameGrid initialRenderVariants={initialRenderVariants} />
        <GameStats initialRenderVariants={initialRenderVariants} />
      </main>
      <AnimatePresence>
        {gameState.modalData.showModal && <Modal />}
      </AnimatePresence>
    </>
  );
};
export default MainGame;
