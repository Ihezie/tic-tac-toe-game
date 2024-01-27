import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faXmark,
  faO,
  faX,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(faXmark, faO, faX, faRotateRight);

import GameHeader from "./components/GameHeader";
import GameGrid from "./components/GameGrid";
import GameStats from "./components/GameStats";


function App() {
  return (
    <main className=" px-[5%] pt-5 min-w-[320px] max-w-[450px] xs:mx-auto sm:px-0 sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:max-w-none sm:w-[450px]">
      <GameHeader />
      <GameGrid />
      <GameStats/>
    </main>
  );
}

export default App;
