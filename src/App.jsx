import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faXmark,
  faO,
  faX,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import MainGame from "./components/MainGame";
import AppProvider from "./AppProvider";
import { useState } from "react";
import Welcome from "./components/Welcome";

library.add(faXmark, faO, faX, faRotateRight);

function App() {
  const [showWelcomePage, setShowWelcomePage] = useState(true);

  return (
    <AppProvider>
      {showWelcomePage ? (
        <Welcome setShowWelcomePage={setShowWelcomePage} />
      ) : (
        <MainGame />
      )}
    </AppProvider>
  );
}

export default App;
