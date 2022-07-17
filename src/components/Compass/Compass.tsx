import styles from './Compass.module.css'
import { motion } from 'framer-motion'
import { Compass as CompassIcon } from 'phosphor-react'

const cardinalPoints = {
  north: 'N',
  south: 'S',
  west: 'O',
  east: 'E'
}

interface CompassProps {
  size?: number
  xAngle?: number
  north?: number
}

export default function Compass({ size = 140, xAngle = 45, north = 0 }: CompassProps) {

  const points = [
    { key: 'north', label: cardinalPoints.north, style: { top: '-30px' } },
    { key: 'south', label: cardinalPoints.south, style: { bottom: '-30px' } },
    { key: 'west', label: cardinalPoints.west, style: { left: '-20px' } },
    { key: 'east', label: cardinalPoints.east, style: { right: '-12px' } },
  ]

  return (
    <div className={styles.perspectiveBoxCompass}>
      <div
        className="inline-flex text-rose-400"
        style={{ transform: `rotateX(${xAngle}deg) rotateY(348deg) perspective(9cm) scale3d(1, 1, 1)` }}
      >
        <motion.div
          transition={{ duration: 1.5 }}
          className="relative flex justify-center items-center"
          initial={{ rotate: north - 100 }}
          whileInView={{ rotate: north }}
        >
          {points.map(point => (
            <div
              key={point.key}
              className="absolute flex text-4xl"
              style={point.style}
            >
              {point.label}
            </div>
          ))}
          <CompassIcon
            size={size}
            style={{ transform: `rotate(${-45}deg)` }}
            weight="thin"
          />
          <div className={`${styles.crossLine} ${styles.crossLineX}`} />
          <div className={styles.crossLine} />
        </motion.div>
      </div>
    </div>
  )
}