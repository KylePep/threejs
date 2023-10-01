/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();

  // useFrame((state, delta) => easing.dampC(shadows.current.getMesh().material.color, state.color, 0.25, delta))

  return (
    <AccumulativeShadows
    ref={shadows}
    temporal
    frames={60}
    alphaTest={0.85}
    scaLe={10}
    rotation={[Math.PI / 2, 0, 0]}
    position={[0,0,-0.14]}
    >
      <RandomizedLight 
      amount={10}
      radius={9}
      intensity={1.55}
      ambient={0.25}
      position={[0, 5, -10]}
      />
      <RandomizedLight 
      amount={4}
      radius={5}
      intensity={1.25}
      ambient={0.55}
      position={[0, 0, -20]}
      />
      </AccumulativeShadows>
  )
}

export default Backdrop