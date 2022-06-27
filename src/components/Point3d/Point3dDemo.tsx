import { motion } from 'framer-motion'
import { useState } from 'react'
import Point3d from './Point3d'

export default function Point3dDemo() {

  const [rotation, setRotation] = useState(20)
  const [storageOpened, setStorageOpened] = useState(false)
  const [aidKitOutside, setAidKitOutside] = useState(false)

  return (
    <div>
      <motion.div
        className="relative"
        onViewportEnter={() => setRotation(-40)}
        onViewportLeave={() => setRotation(20)}
        viewport={{ amount: 'all' }}
      >
        <div
          className="bg-gradient-to-br from-teal-400  to-lime-500 absolute h-full left-0 top-0 z-40"
          style={{
            mixBlendMode: 'plus-lighter',
            width: 176,
            transform: 'rotate(328deg)',
            left: -78,
            borderRadius: 20,
          }}
        />
        <Point3d
          rotateY={rotation}
          backDoorOpened={storageOpened}
          storageVisible={aidKitOutside}
        />
      </motion.div>
      <div className="h-24" />
      <input
        type="range"
        min={-30}
        max={160}
        value={rotation}
        onChange={e => setRotation(Number(e.target.value))}
      />
      <div className="mb-3 mt-1">
        {rotation > 130 ? (
          <>
            <button
              onClick={() => {
                if (!storageOpened) {
                  setStorageOpened(true)
                  setTimeout(() => {
                    setAidKitOutside(true)
                  }, 150)
                } else {
                  setAidKitOutside(false)
                  setTimeout(() => {
                    setStorageOpened(false)
                  }, 200)
                }
              }}
            >
              {storageOpened ? 'Close storage' : 'Open storage'}
            </button>
          </>
        ) : (
          <button onClick={() => setRotation(160)}>
            Turn around this weird thing
          </button>
        )}
      </div>
    </div>
  )
}