"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface CounterProps {
  target: number;
  duration?: number;
}

const AnimatedCounter:React.FC<CounterProps> = ({ target, duration = 2 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.floor(latest).toLocaleString()
  );

  useEffect(() => {
    const controls = animate(count, target, {
      duration,
      ease: "easeOut",
    });
    return controls.stop;
  }, [target, duration, count]);

  return (
    <motion.span className="font-bold text-3xl title-color">
      {rounded}
    </motion.span>
  );
};

export default AnimatedCounter;
