"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="w-20 h-20 bg-[url('/furniture-icon.png')] bg-cover bg-center rounded-full"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
        <motion.p
          className="text-xl font-semibold text-gray-600"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          Loading your Furniro experience...
        </motion.p>
      </div>
    </div>
  );
}