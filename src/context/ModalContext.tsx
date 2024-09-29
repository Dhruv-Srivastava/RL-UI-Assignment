import React, { createContext, useState, useContext } from "react";

export interface ModalContextType {
  isOpened: boolean;
  handleClose: () => void;
  handleOpen: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpened, setIsOpened] = useState<ModalContextType["isOpened"]>(false);

  function handleOpen() {
    setIsOpened(true);
  }
  function handleClose() {
    setIsOpened(false);
  }

  return (
    <ModalContext.Provider
      value={{
        isOpened,
        handleOpen,
        handleClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
