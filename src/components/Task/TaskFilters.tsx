import React from "react";
import { useTask } from "../../context/TaskContext";
import { motion } from "framer-motion";

const TaskFilters: React.FC = () => {
  const { filter, setFilter, searchTerm, setSearchTerm } = useTask();

  return (
    <div className="flex flex-col md:flex-row items-center">
      <label className="relative w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search tasks..."
          className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="absolute top-0 right-0 bottom-0 m-auto z-10 cursor-pointer flex items-center gap-2 rounded-r-md px-2 py-1 bg-gray-700 duration-300 transition-transform ease-in-out hover:scale-105 active:scale-100"
          onClick={() => setSearchTerm("")}
        >
          <span className="gradient-text font-semibold">Clear</span>
        </button>
      </label>
      <div className="w-full md:w-1/2 flex relative">
        <motion.div
          layoutId="tab-background"
          className="absolute top-0 bottom-0 left-0 right-0 bg-blue-500 rounded-md"
          initial={false}
          animate={{
            left:
              filter === "all"
                ? "0%"
                : filter === "active"
                ? "33.33%"
                : "66.66%",
            width: "33.33%",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        <button
          onClick={() => setFilter("all")}
          className={`flex-1 py-2 px-4 rounded-l-md relative z-10 isolate ${
            filter === "all" ? "text-white" : "text-gray-400"
          }`}
          role="tab"
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          className={`flex-1 py-2 px-4 relative z-10 isolate ${
            filter === "active" ? "text-white" : "text-gray-400"
          }`}
          role="tab"
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`flex-1 py-2 px-4 rounded-r-md relative z-10 isolate ${
            filter === "completed" ? "text-white" : "text-gray-400"
          }`}
          role="tab"
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default TaskFilters;
