import { useModal } from "../../context/ModalContext";
import { Task, useTask } from "../../context/TaskContext";
import TaskForm from "./TaskForm";

export default function EditTask({ task }: { task: Task }) {
  const { updateTask } = useTask();
  const { handleClose } = useModal();

  function onSave(data: Task) {
    updateTask(data.id, {
      title: data.title,
      description: data.description,
      dueDate: data.dueDate,
      priority: data.priority,
      status: data.status,
      isEditing: false,
    });

    handleClose();
  }
  return <TaskForm initialValue={task} onSave={onSave} />;
}
