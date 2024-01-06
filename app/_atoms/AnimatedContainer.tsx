"use client";

import { motion } from "framer-motion";

type AnimatedContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function AnimatedContainer({
  children,
  className = "",
}: AnimatedContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
