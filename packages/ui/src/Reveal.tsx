"use client";

// 滚动入场动画：元素进入视口时，从下方淡入上浮。
// 这是"苹果味"丝滑感的核心——克制、统一、缓动自然。

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      // once:false → 每次进入视区都重播；amount:0.3 → 元素露出约 30% 才触发，
      // 反复滚动时节奏更稳，不会一露头就闪。
      viewport={{ once: false, amount: 0.3, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1], // 苹果常用的缓出曲线
      }}
    >
      {children}
    </motion.div>
  );
}
