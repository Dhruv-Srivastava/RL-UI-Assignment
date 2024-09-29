import React from "react";

import { motion } from "framer-motion";

import Header from "./Header";
import TaskList from "./TaskList";
import TaskFilters from "./TaskFilters";
import TaskStats from "./TaskStats";

import AddTask from "./AddTask";

const TaskApp: React.FC = () => {

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col gap-8"
      id="main-container"
    >
      <Header />
      <AddTask />
      <TaskFilters />
      <TaskStats />
      <TaskList />
    </motion.div>
  );
};

export default TaskApp;
