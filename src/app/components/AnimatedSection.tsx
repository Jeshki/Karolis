'use client'

import { motion } from 'framer-motion';

export const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="mb-8"
    >
      {children}
    </motion.section>
  );
};