import { AnimationProps, motion } from 'framer-motion'
import { ComponentProps, ReactNode } from 'react'
import { Transition, Variants } from 'framer-motion'
import { ViewportProps } from 'framer-motion/types/motion/features/viewport/types'

export const sectionVariants: Variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export const sectionTransition: Transition = {
  type: 'tween',
  duration: 0.8,
}

export const tweenToTop: ComponentProps<typeof motion.div> = {
  variants: sectionVariants,
  initial: 'initial',
  whileInView: 'visible',
  viewport: { once: true, margin: '-50px' },
  transition: sectionTransition,
}

export default function Section({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <motion.section
      {...tweenToTop}
      className={className}
    >
      {children}
    </motion.section>
  )
}