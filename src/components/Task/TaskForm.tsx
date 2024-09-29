import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Task } from "../../context/TaskContext";

type FormPropsType = {
  initialValue?: object;
  onSave: (data: Task) => void;
};
export default function TaskForm({ initialValue, onSave }: FormPropsType) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: initialValue,
  });

  const onSubmit = (data: Task) => {
    onSave(data);
    reset();
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 bg-gray-800 p-4 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <label className="flex flex-col gap-1">
        <span className="text-xs gradient-text font-semibold">
          Title<sup>*</sup>
        </span>
        <input
          type="text"
          {...register("title", {
            required: "Title is required",
            minLength: {
              value: 3,
              message: "Title must be at least 3 characters long",
            },
          })}
          placeholder="Task title"
          className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          autoComplete="off"
        />
        <AnimatePresence>
          {errors.title && (
            <motion.p
              className="text-red-500 text-sm mt-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {errors.title.message}
            </motion.p>
          )}
        </AnimatePresence>
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-xs gradient-text font-semibold ">
          Description<sup>*</sup>
        </span>
        <textarea
          {...register("description", {
            required: "Description is required",
            minLength: {
              value: 10,
              message: "Description must be at least 10 characters long",
            },
            maxLength: {
              value: 100,
              message: "Description must be less than 100 characters",
            },
          })}
          placeholder="Task description"
          className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <AnimatePresence>
          {errors.description && (
            <motion.p
              className="text-red-500 text-sm mt-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {errors.description.message}
            </motion.p>
          )}
        </AnimatePresence>
      </label>

      <div className="flex justify-between items-start gap-6 flex-wrap">
        <label className="flex-1 flex flex-col gap-1">
          <span className="text-xs gradient-text font-semibold">
            Due Date<sup>*</sup>
          </span>
          <input
            type="date"
            {...register("dueDate", {
              required: "Due date is required",
              validate: (value) =>
                new Date(value) < new Date(new Date().toDateString())
                  ? "Due date cannot be in the past"
                  : true,
            })}
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <AnimatePresence>
            {errors.dueDate && (
              <motion.p
                className="text-red-500 text-sm mt-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {errors.dueDate.message}
              </motion.p>
            )}
          </AnimatePresence>
        </label>

        <label className="flex-1 flex flex-col gap-1">
          <span className="text-xs gradient-text font-semibold">
            Priority<sup>*</sup>
          </span>

          <div className="flex justify-between gap-2">
            <label className="flex-1 bg-[#444a71] text-center px-3 py-2 rounded-md outline-none cursor-pointer focus-within:bg-violet-200 focus-within:ring-2 focus-within:ring-violet-300 has-[:checked]:bg-[#252B5C] has-[:checked]:text-[#F5F4F8] has-[:checked]:ring-2 has-[:checked]:ring-violet-300 transition-colors duration-200 ease-in-out">
              <input
                type="radio"
                className="absolute -z-10 opacity-0 inset-0 text-blue-500"
                {...register("priority", {required:"Priority is required"})}
                value="low"
              />
              <span>Low</span>
            </label>
            <label className="flex-1 bg-[#444a71] text-center px-3 py-2 rounded-md outline-none cursor-pointer focus-within:bg-violet-200 focus-within:ring-2 focus-within:ring-violet-300 has-[:checked]:bg-[#252B5C] has-[:checked]:text-[#F5F4F8] has-[:checked]:ring-2 has-[:checked]:ring-violet-300 transition-colors duration-200 ease-in-out">
              <input
                type="radio"
                className="absolute -z-10 opacity-0 inset-0 text-blue-500"
                {...register("priority")}
                value="medium"
              />
              <span>Medium</span>
            </label>
            <label className="flex-1 bg-[#444a71] text-center px-3 py-2 rounded-md outline-none cursor-pointer focus-within:bg-violet-200 focus-within:ring-2 focus-within:ring-violet-300 has-[:checked]:bg-[#252B5C] has-[:checked]:text-[#F5F4F8] has-[:checked]:ring-2 has-[:checked]:ring-violet-300 transition-colors duration-200 ease-in-out">
              <input
                type="radio"
                className="absolute -z-10 opacity-0 inset-0 text-blue-500"
                {...register("priority")}
                value="high"
              />
              <span>High</span>
            </label>
          </div>

          <AnimatePresence>
            {errors.priority && (
              <motion.p
                className="text-red-500 text-sm mt-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {errors.priority.message}
              </motion.p>
            )}
          </AnimatePresence>
        </label>
      </div>

      <motion.button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200 active:scale-95"
      >
        {initialValue ? "Edit" : "Add"}
      </motion.button>
    </motion.form>
  );
}
