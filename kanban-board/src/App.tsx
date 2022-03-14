import React from "react";
import "./App.css";
import KanbanBoard from "./components/KanbanBoard";
import Nav from "./components/Nav";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Nav/>
      <KanbanBoard />
    </div>
  );
};

export default App;
