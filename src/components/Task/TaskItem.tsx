import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Trash2, Edit2 } from "lucide-react";
import { useTask, Task } from "../../context/TaskContext";
import Modal from "./TaskModal_";
import EditTask from "./EditTask";
import { useModal } from "../../context/ModalContext";

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { updateTask, deleteTask, toggleEdit } = useTask();
  const { isOpened, handleOpen } = useModal();

  function handleEditOpen() {
    toggleEdit(task.id);
    handleOpen();
  }

  const handleStatusChange = () => {
    updateTask(task.id, {
      status: task.status === "completed" ? "task" : "completed",
    });
  };

  const priorityColors = {
    low: "bg-green-500",
    medium: "bg-yellow-500",
    high: "bg-red-500",
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <>
      <motion.div
        layout
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-gray-800 rounded-md p-4"
      >
        <div className="flex gap-3 items-center md:gap-5 lg:gap-8">
          {/* Child 1 */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleStatusChange}
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              task.status === "completed"
                ? "bg-purple-500 border-purple-500"
                : "border-gray-400"
            }`}
          >
            {task.status === "completed" && (
              <Check size={12} className="text-white" />
            )}
          </motion.button>
          {/* Child 2 */}
          <div className="max-w-[60%] flex flex-col gap-2">
            <div className="">
              <h3
                className={`font-semibold ${
                  task.status === "completed"
                    ? "line-through text-gray-500"
                    : "text-gray-200"
                }`}
              >
                {task.title}
              </h3>
              <p
                className={`text-gray-400 text-sm break-words font-semibold ${
                  task.status === "completed" ? "line-through" : ""
                }`}
              >
                {task.description}
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-gray-500 text-xs mr-2">
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </span>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  priorityColors[task.priority]
                }`}
              >
                {task.priority}
              </span>
            </div>
          </div>
          {/* Child 3 */}
          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={handleEditOpen}
              className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
            >
              <Edit2 size={18} />
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-gray-400 hover:text-red-500 transition-colors duration-200"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isOpened && task.isEditing && (
            <Modal>
              <EditTask task={task} />
            </Modal>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default TaskItem;
