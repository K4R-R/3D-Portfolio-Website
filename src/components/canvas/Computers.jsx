import React,{ Suspense,useEffect,useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,Preload,useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {

  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    
    <mesh>

      <hemisphereLight intensity={2} groundColor='black' />
      <pointLight intensity={isMobile ?.2:1} />
      <spotLight 
        position={[0,18,0]}
        angle={Math.PI/10}
        intensity={2000}
        castShadow
        penumbra={1}
      />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.35:0.75 }
        position={isMobile? [0,-1.5,-0.5]:[0,-3.25,-1.5] }
        rotation={isMobile? [-.01,Math.PI/9,-.15]:[-.01,Math.PI/12,-.1]}
      />

    </mesh>
  )
}

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)');
    setIsMobile(mediaQuery.matches);

    const handelMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change',handelMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change',handelMediaQueryChange);
    }
  }, [])
  
  
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position:[20,3,5], fov:27 }}
      gl={{ preserveDrawingBuffer:true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas;