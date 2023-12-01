import { HomeScene } from '@/scenes/HomeScene'
import { Canvas } from '@react-three/fiber'






export const App = () => {
  return (
    <>
      <div className='app'>
        <section className='hero'>
          <h1>My first 3D Object</h1>
          <h3>Luis Rodriguez Valido @luisvalrod</h3>
       </section>
      </div>
      <Canvas 
        className='canvas' 
        shadows
        camera={{position: [0, 30, 60], fov: 5}}>
        <HomeScene />
      </Canvas>

    </>
  )
}

/*Se crea un canvas donde va a vivir el entorno 3D. El Canvas contine un ambientLight para iluminar el objeto que puede tener 
la propiedad intensity. 
Deben haber los siguiente elementos:
- mesh : Este elemento contiene geometria (boxGeometry), material (meshStandardMaterial, que ademas puede tener propiedad color)
- ambientLight que hace que el objeto se vea. se puede cambiar la intensidad con intensity
- Environment proporcina un entorno. el campo preset podria rellenarse con los siguiente valores (apartment, city, park, dawn, forest, lobby, night, studio, sunset, warehouse)
Si a preset se le anade background antes (backgroun preset), el programa anade el fondo en donde estara nuestro objeto.
-Orbit Controls ofrece control sobre el objeto, para anadir posibilidad de rotacion
*/




/*Ejemplo de Arbol por chat GPT
const Tree = () => {
  return (
    <>
      {/* Tronco 
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Ramas
      <mesh position={[0, 0.5, 0]}>
        <coneGeometry args={[0.3, 1, 8]} />
        <meshStandardMaterial color="#228B22" />
      </mesh>

      <mesh position={[0, 1.2, 0]}>
        <coneGeometry args={[0.2, 0.8, 8]} />
        <meshStandardMaterial color="#228B22" />
      </mesh>

      {/* Hojas 
      <mesh position={[0, 1.8, 0]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color="#00FF00" />
      </mesh>
    </>
  );
};

*/