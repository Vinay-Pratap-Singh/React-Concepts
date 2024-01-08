import { useState } from "react";
import Polling from "./components/Polling";
import NotPolling from "./components/NotPolling";

const App = () => {
  const [showPolling, setShowPolling] = useState(false);
  return (
    <div>
      <button onClick={() => setShowPolling(!showPolling)}>
        Change Polling State
      </button>
      {showPolling ? <Polling /> : <NotPolling />}
    </div>
  );
};

export default App;
