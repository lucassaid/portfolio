import { CSSProperties } from 'react'
import styles from './Point3d.module.css'

interface DecoLineProps {
  angle?: number
  style: CSSProperties,
}

export function DecoLine({ angle = 0, style }: DecoLineProps) {
  return (
    <div
      className={styles.decoLine}
      style={{
        transform: `rotate(${angle}deg)`,
        ...style
      }} />
  )
}
