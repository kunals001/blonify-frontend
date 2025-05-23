"use client"
import React from 'react'
import { motion } from 'framer-motion'

type FloatingShapeProps = {
  color: string; // e.g., "bg-red-500"
  size: string;  // e.g., "w-10 h-10"
  top: string;   // e.g., "10%"
  left: string;  // e.g., "20%"
  delay?: number;
};

const FloatingShape = ({ color, size, top, left, delay }:FloatingShapeProps) => {
	return (
		<motion.div
			className={`absolute rounded-full ${color} ${size} opacity-20 blur-xl overflow-hidden`}
			style={{ top, left }}
			animate={{
				y: ["0%", "100%", "0%"],
				x: ["0%", "100%", "0%"],
				rotate: [0, 360],
			}}
			transition={{
				duration: 20,
				ease: "linear",
				repeat: Infinity,
				delay,
			}}
			aria-hidden='true'
		/>
	);
};


export default FloatingShape