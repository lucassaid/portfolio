import styles from './Point3d.module.css'
import { motion, MotionValue } from 'framer-motion'

interface FaceProps {
  className?: string
  opacity: MotionValue<number>
  children?: JSX.Element | JSX.Element[]
}

export function Face({ className = '', opacity, children }: FaceProps) {
  return (
    <motion.div
      className={`${styles.face} ${className}`}
      style={{ opacity }}
    >
      {children}
    </motion.div>
  )
}
