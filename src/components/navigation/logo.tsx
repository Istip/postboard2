import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

const Logo = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="flex items-center"
      onHoverStart={() => !hovered && setHovered(true)}
      onHoverEnd={() => hovered && setHovered(false)}
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
          {hovered && (
            <motion.span
              className="text-base heading text-background"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.15, duration: 0.2 }}
            >
              Postboard
            </motion.span>
          )}
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default Logo;
