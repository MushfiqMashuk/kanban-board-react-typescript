import React from "react";
import "./App.css";
import KanbanBoard from "./components/KanbanBoard";
import Nav from "./components/Nav";
import Context from "./context/CardContext";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Context>
        <>
          <Nav />
          <KanbanBoard />
        </>
      </Context>
    </div>
  );
};

export default App;
