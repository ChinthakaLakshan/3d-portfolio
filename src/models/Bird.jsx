import React from 'react'
import birdScene from '../assets/3d/bird.glb'
import { useGLTF } from '@react-three/drei'
const Bird = () => {
    const{scene ,animation}=useGLTF(birdScene)
  return (
   <mesh>
<primitive object={scene}/>
   </mesh>
  )
}

export default Bird