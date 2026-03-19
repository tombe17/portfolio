"use client";

import { motion } from "framer-motion";

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}