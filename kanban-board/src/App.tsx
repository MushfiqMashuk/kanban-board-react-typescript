import React from "react";
import "./App.css";
import KanbanBoard from "./components/KanbanBoard";

const App: React.FC = (): JSX.Element => {
  

  return (
    <div className="App">
      <KanbanBoard />
    </div>
  );
};

export default App;
