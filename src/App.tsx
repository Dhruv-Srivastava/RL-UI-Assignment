import React from "react";
import { TaskProvider } from "./context/TaskContext";
import TaskApp from "./components/Task/TaskApp";
import { ModalProvider } from "./context/ModalContext";

const App: React.FC = () => {
  return (
    <TaskProvider>
      <ModalProvider>
        <TaskApp />
      </ModalProvider>
    </TaskProvider>
  );
};

export default App;
