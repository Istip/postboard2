import { motion, AnimatePresence } from "motion/react";
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface AnimatedDialogContextType {
  isOpen: boolean;
  openDialog: (
    layoutId: string,
    content: ReactNode,
    className?: string
  ) => void;
  closeDialog: () => void;
  layoutId: string | null;
  content: ReactNode;
  className: string;
}

const AnimatedDialogContext = createContext<AnimatedDialogContextType | null>(
  null
);

export const useAnimatedDialog = () => {
  const context = useContext(AnimatedDialogContext);
  if (!context) {
    throw new Error(
      "useAnimatedDialog must be used within AnimatedDialogProvider"
    );
  }
  return context;
};

interface AnimatedDialogProviderProps {
  children: ReactNode;
}

export const AnimatedDialogProvider = ({
  children,
}: AnimatedDialogProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [layoutId, setLayoutId] = useState<string | null>(null);
  const [content, setContent] = useState<ReactNode>(null);
  const [className, setClassName] = useState<string>("");

  const openDialog = (
    id: string,
    dialogContent: ReactNode,
    dialogClassName?: string
  ) => {
    setLayoutId(id);
    setContent(dialogContent);
    setClassName(dialogClassName || "");
    setIsOpen(true);
  };

  const closeDialog = () => setIsOpen(false);

  const handleExitComplete = () => {
    setLayoutId(null);
    setContent(null);
    setClassName("");
  };

  return (
    <AnimatedDialogContext.Provider
      value={{ isOpen, openDialog, closeDialog, layoutId, content, className }}
    >
      {children}
      <AnimatedDialogPortal onExitComplete={handleExitComplete} />
    </AnimatedDialogContext.Provider>
  );
};

interface AnimatedDialogPortalProps {
  onExitComplete: () => void;
}

const AnimatedDialogPortal = ({
  onExitComplete,
}: AnimatedDialogPortalProps) => {
  const { isOpen, closeDialog, layoutId, content, className } =
    useAnimatedDialog();

  return (
    <AnimatePresence mode="wait" onExitComplete={onExitComplete}>
      {isOpen && layoutId && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDialog}
          />
          <motion.div
            layoutId={layoutId}
            className={`relative w-full max-w-lg m-4 rounded-xl shadow-2xl p-4 ${className}`}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
            }}
          >
            <>{content}</>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
