import { Task, useTask } from "../../context/TaskContext";
import TaskForm from "./TaskForm";

export default function AddTask() {
  const { addTask, setFilter } = useTask();

  function onSave(data: Task) {
    addTask({
      title: data.title,
      description: data.description,
      dueDate: data.dueDate,
      priority: data.priority,
      status: "task",
      isEditing: false,
    });

    setFilter("all");
  }
  return <TaskForm onSave={onSave} />;
}
