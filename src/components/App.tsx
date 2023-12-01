import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'



export const App = () => {
  return (
    <>
      <div className='App'>
       My first 3D Object
      </div>
      <Canvas className='canvas'>
        <OrbitControls />
        <Environment background preset='sunset'/>
        <ambientLight intensity={5} />
        <mesh> 
          <boxGeometry />
          <meshStandardMaterial color="#9922BB" />
        </mesh>
      </Canvas>

    </>
  )
}

/*Se crea un canvas donde va a vivir el entorno 3D. El Canvas contine un ambientLight para iluminar el objeto que puede tener 
la propiedad intensity. 
Deben haber los siguiente elementos:
- mesh : Este elemento contiene geometria (boxGeometry), material (meshStandardMaterial, que ademas puede tener propiedad color)

*/
