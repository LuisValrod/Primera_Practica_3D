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
