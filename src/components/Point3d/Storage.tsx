import styles from './Point3d.module.css'
import { motion, MotionValue } from 'framer-motion'
import { transition } from './Point3d'

interface StorageProps {
  opacity: MotionValue<number>
  visible: boolean
  children: JSX.Element | JSX.Element[]
}

export function Storage({ opacity, visible, children }: StorageProps) {
  return (
    <motion.div
      className={styles.storage}
      animate={{ translateZ: visible ? -40 : -5 }}
      transition={transition}
      style={{ opacity }}
    >
      <div className={styles.storageContent}>
        {children}
      </div>
      <motion.div
        animate={{
          opacity: visible ? 1 : 0,
          scale: visible ? 1 : 0.9
        }}
        className={styles.storageShadow} />
    </motion.div>
  )
}
