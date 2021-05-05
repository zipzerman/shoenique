/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/shoe.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={materials.laces} geometry={nodes.shoe.geometry} />
      <mesh material={materials.mesh} geometry={nodes.shoe_1.geometry} />
      <mesh material={materials.caps} geometry={nodes.shoe_2.geometry} />
      <mesh material={materials.inner} geometry={nodes.shoe_3.geometry} />
      <mesh material={materials.sole} geometry={nodes.shoe_4.geometry} />
      <mesh material={materials.stripes} geometry={nodes.shoe_5.geometry} />
      <mesh material={materials.band} geometry={nodes.shoe_6.geometry} />
      <mesh material={materials.patch} geometry={nodes.shoe_7.geometry} />
    </group>
  )
}

useGLTF.preload('/shoe.glb')
