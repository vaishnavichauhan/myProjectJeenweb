"use client";

import React, { ReactNode } from "react";
import { motion, useReducedMotion, HTMLMotionProps } from "framer-motion";

// Standard brand easing curve for smooth, luxury feel
export const BRAND_EASE = [0.22, 1, 0.36, 1] as const;

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  viewportOnce?: boolean;
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  distance = 24,
  className = "",
  viewportOnce = true,
  ...props
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const getOffset = () => {
    if (shouldReduceMotion) return { x: 0, y: 0 };
    switch (direction) {
      case "up":
        return { x: 0, y: distance };
      case "down":
        return { x: 0, y: -distance };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0
      }}
      viewport={{ once: viewportOnce, margin: "-40px" }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay,
        ease: BRAND_EASE
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  viewportOnce?: boolean;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  delayChildren = 0.05,
  className = "",
  viewportOnce = true,
  ...props
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: viewportOnce, margin: "-40px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
            delayChildren
          }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  direction?: "up" | "down" | "none";
  distance?: number;
  className?: string;
}

export function StaggerItem({
  children,
  direction = "up",
  distance = 20,
  className = "",
  ...props
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();
  const yOffset = shouldReduceMotion ? 0 : direction === "up" ? distance : direction === "down" ? -distance : 0;

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: yOffset
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: shouldReduceMotion ? 0.2 : 0.45,
            ease: BRAND_EASE
          }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface ScaleInProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
  ...props
}: ScaleInProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: shouldReduceMotion ? 1 : 0.94
      }}
      whileInView={{
        opacity: 1,
        scale: 1
      }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay,
        ease: BRAND_EASE
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface FloatingElementProps {
  children: ReactNode;
  distance?: number;
  duration?: number;
  className?: string;
}

export function FloatingElement({
  children,
  distance = 6,
  duration = 4,
  className = ""
}: FloatingElementProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      animate={{
        y: [0, -distance, 0]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface HoverLiftProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  liftY?: number;
  scale?: number;
  className?: string;
}

export function HoverLift({
  children,
  liftY = -4,
  scale = 1.01,
  className = "",
  ...props
}: HoverLiftProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: liftY, scale }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
      transition={{
        duration: 0.25,
        ease: BRAND_EASE
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
