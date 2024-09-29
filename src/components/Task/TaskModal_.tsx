import { motion } from "framer-motion";
import { FilePenLine, X } from "lucide-react";
import { createPortal } from "react-dom";
import { useModal } from "../../context/ModalContext";

const Modal = ({ children,}) => {
  const { handleClose } = useModal();
  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
      className="fixed inset-0 w-full h-full z-50 isolate bg-gray-900 flex flex-col justify-center px-6"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.1 }}
        className="bg-gray-700 p-4 rounded-xl flex flex-col gap-6"
      >
        <div className="flex justify-between items-center">
          <FilePenLine size={35} className="text-orange-400" />
          <button onClick={handleClose}>
            <X size={35} className="text-red-300" />
          </button>
        </div>
        {children}
      </motion.div>
    </motion.div>,
    document.querySelector("#main-container")
  );
};

export default Modal;
