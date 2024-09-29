import { useTask } from "../../context/TaskContext";

export default function TaskStats() {
  const { tasks } = useTask();

  return (
    <div className="flex justify-between items-center">
      <p className="text-gray-400">
        Tasks created{" "}
        <span className="bg-gray-800 rounded-full px-2 py-1 text-sm">
          {tasks.length}
        </span>
      </p>
      <p className="text-purple-400">
        Completed{" "}
        <span className="bg-gray-800 rounded-full px-2 py-1 text-sm">
          {tasks.filter((task) => task.status === "completed").length} of{" "}
          {tasks.length}
        </span>
      </p>
    </div>
  );
}
