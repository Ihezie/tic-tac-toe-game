import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faXmark,
  faO,
  faX,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import MainGame from "./components/MainGame";
import AppProvider from "./AppProvider";
import { useGameData } from "./AppProvider";

library.add(faXmark, faO, faX, faRotateRight);

function App() {
  return (
    <AppProvider>
      <MainGame />
    </AppProvider>
  );
}

export default App;
