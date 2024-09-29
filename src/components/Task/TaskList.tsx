import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TaskItem from "./TaskItem";
import { useTask } from "../../context/TaskContext";

const TaskList: React.FC = () => {
  const { tasks, filter, searchTerm } = useTask();
  const [isOverflowing, setIsOverflowing] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "all") return true;
      if (filter === "active") return task.status !== "completed";
      if (filter === "completed") return task.status === "completed";
      return task.status === filter;
    })
    .filter(
      (task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.priority === searchTerm.toLowerCase() ||
        new Date(task.dueDate)
          .toLocaleDateString()
          .includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (a.dueDate < b.dueDate) return -1;
      if (a.dueDate > b.dueDate) return 1;
      const priorityOrder = { high: 0, medium: 1, low: 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

  useEffect(() => {
    const checkOverflow = () => {
      if (listRef.current) {
        setIsOverflowing(
          listRef.current.scrollHeight > listRef.current.clientHeight
        );
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [filteredTasks]);

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={listRef}
      className={`flex flex-col gap-2 max-h-[calc(100vh-300px)] ${
        isOverflowing ? "overflow-y-auto pr-2" : "overflow-y-hidden"
      }`}
      variants={listVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default TaskList;
