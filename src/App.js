import Routes from "./components/Routess";
import { createContext, useState } from "react";

export const Context = createContext()

function App() {
  const [menu, setMenu] = useState(false)
  return (
    <div className="App">
      <Context.Provider value={{ menu, setMenu }}>
        <Routes />
      </Context.Provider>
    </div>
  );
}

export default App;
