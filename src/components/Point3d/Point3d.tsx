import styles from './Point3d.module.css'
import { motion, animate, useMotionValue, useTransform, useAnimationFrame } from 'framer-motion'
import { useEffect, useMemo, useRef } from 'react'
import { Face } from './Face'
import { BackDoor } from './BackDoor'
import { Storage } from './Storage'
import { DecoLine } from './DecoLine'
import { FirstAidKit } from 'phosphor-react'

export const transition = {
  type: 'spring',
  stiffness: 80
}

interface Point3dProps {
  rotateY: number
  backDoorOpened?: boolean
  storageVisible?: boolean
}

export default function Point3d({
  rotateY,
  backDoorOpened = false,
  storageVisible = false,
}: Point3dProps) {

  const rY = useMotionValue(rotateY)
  const point3dRef = useRef<HTMLDivElement>(null)

  useAnimationFrame(() => {
    if (!point3dRef.current) return
    point3dRef.current.style.transform = `perspective(200px) scale(1.7) rotateY(${rY.get()}deg) translateZ(0px)`
  })

  useEffect(() => {
    const controls = animate(rY, rotateY, {
      duration: 1.2
    })
    return controls.stop
  }, [rotateY, rY])

  const xRange = [-40, 0, 90, 180, 270, 360]
  const frontOpacity = useTransform(rY, xRange, [1, 1, 0.3, 0, 0.3, 1])
  const backOpacity = useTransform(rY, xRange, [0, 0, 0.3, 1, 0.3, 0])
  const leftOpacity = useTransform(rY, xRange, [0, 0.3, 1, 0.3, 0, 0.3])
  const rightOpacity = useTransform(rY, xRange, [1, 0.3, 0, 0.3, 1, 0.3])

  const faces = useMemo(() => (
    <>
      <Face className={styles.faceFront} opacity={frontOpacity}>
        <div className={`${styles.frontHalf} ${styles.frontHalfTop}`} />
        <div className={`${styles.frontHalf} ${styles.frontHalfBottom}`} />
        <DecoLine angle={-30} style={{ top: 50 }} />
        <DecoLine angle={-30} style={{ bottom: 50 }} />
      </Face>
      <Face className={`${styles.notch} ${styles.notchBottom}`} opacity={frontOpacity}>
        <div><div className={styles.camera} /></div>
        <div className={styles.screen} />
      </Face>
      <Face className={`${styles.notch} ${styles.notchTop}`} opacity={frontOpacity} />
      <Face className={styles.faceLeft} opacity={leftOpacity}>
        <DecoLine style={{ bottom: 40 }} />
        <DecoLine style={{ top: 58 }} />
      </Face>
      <Face className={styles.faceRight} opacity={rightOpacity}>
        <DecoLine style={{ top: 41 }} />
        <DecoLine style={{ bottom: 58 }} />
      </Face>
      <Face className={styles.faceBack} opacity={backOpacity}>
        <DecoLine angle={-30} style={{ top: 50 }} />
        <DecoLine angle={-30} style={{ bottom: 50 }} />
        <motion.div
          className={styles.backDoorFrame}
          animate={{ opacity: backDoorOpened ? 0.4 : 0 }}
        />
      </Face>
    </>
  ), [frontOpacity, backOpacity, leftOpacity, rightOpacity, backDoorOpened])

  return (
    <>
      <motion.div
        ref={point3dRef}
        className={styles.perspectiveBox}
      >
        {faces}
        <BackDoor opened={backDoorOpened} opacity={backOpacity} />
        <Storage visible={storageVisible} opacity={backOpacity}>
          <FirstAidKit size={25} />
        </Storage>
      </motion.div>
    </>
  )
}
