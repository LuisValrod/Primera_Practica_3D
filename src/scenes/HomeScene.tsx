import { Environment, OrbitControls, Stars } from '@react-three/drei'
export const HomeScene = () => {
    return (
        <>
        <OrbitControls />
        <Environment preset='city'/>
        <ambientLight />
        <mesh> 
          <boxGeometry />
          <meshStandardMaterial color="#9922BB" />
        </mesh>
        <Stars radius={10} depth={10} count={1000} factor={20} saturation={0} fade speed={1}/>
        </>
    )
}



//Este archivo fue creado posteriormente, se implanto toda la logica que estaba dentro del canvas en un componente que se llama HomeScene
//Este componente se exporta e importa en App como cualquier componente de React
//Se ha incorporado en index.ts, que se encuentra en la carpeta scenes