import React from "react";
import "./App.css";
import KanbanBoard from "./components/KanbanBoard";
import Nav from "./components/Nav";
import CardContext from "./context/CardContext";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <CardContext>
        <>
          <Nav />
          <KanbanBoard />
        </>
      </CardContext>
    </div>
  );
};

export default App;
