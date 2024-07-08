import React,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber';
import { Decal,Float,OrbitControls,Preload,useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { AmbientLight } from 'three';

const Ball = (props) => {

  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[0,0,0.25]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,2]} />
        {/* <boxGeometry args={[1,1,1,1,1,1]} /> */}
        <meshStandardMaterial 
          color='#6a00b9'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal 
          position={[0,0,1]}
          rotation={[2*Math.PI,0,2*Math.PI]}
          map={decal}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon}) => {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer:true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all/>
    </Canvas>
  )
}

export default BallCanvas