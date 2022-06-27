import styles from './Point3d.module.css'
import { motion, MotionValue } from 'framer-motion'
import { transition } from './Point3d'

interface BackDoorProps {
  opened: boolean
  opacity: MotionValue<number>
  openedAngle?: number
}

export function BackDoor({ opened, opacity, openedAngle = -110 }: BackDoorProps) {
  return (
    <motion.div
      className={styles.backDoor}
      animate={{
        rotateY: opened ? openedAngle : 0,
      }}
      transition={transition}
      style={{
        opacity,
        translateZ: -15
      }} />
  )
}
