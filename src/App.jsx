import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faXmark,
  faO,
  faX,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import MainGame from "./components/MainGame";
import { useGameData } from "./AppProvider";
import Welcome from "./components/Welcome";

library.add(faXmark, faO, faX, faRotateRight);

function App() {
  const {
    gameState: { showMainGame },
  } = useGameData();

  return <>{showMainGame ? <MainGame /> : <Welcome />}</>;
}

export default App;
