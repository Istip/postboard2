import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ChevronLeft } from "lucide-react";

interface Props {
  showBackButton?: boolean;
}

const Logo = ({ showBackButton = false }: Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="flex items-center"
      onHoverStart={() => !hovered && setHovered(true)}
      onHoverEnd={() => hovered && setHovered(false)}
      whileTap={{ scale: 0.9, transition: { duration: 0.05 } }}
    >
      <Link to="/">
        <motion.div
          className="rounded-4xl w-8 h-8 bg-primary flex items-center justify-center overflow-hidden"
          animate={hovered ? { width: 112 } : { width: 34 }}
          transition={
            hovered
              ? { type: "spring", stiffness: 500, damping: 15 }
              : { type: "tween", duration: 0.2 }
          }
          style={{ minWidth: 32 }}
        >
          {!hovered && (
            <motion.span
              className="text-base heading font-bold text-background"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              P
            </motion.span>
          )}
          {hovered && (
            <motion.div
              className="center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.15, duration: 0.2 }}
            >
              {showBackButton && (
                <ChevronLeft size={16} className="text-base text-background" />
              )}
              <div className="text-base heading text-background">Postboard</div>
            </motion.div>
          )}
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default Logo;
