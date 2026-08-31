"use client"

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";

// Component tải và hiển thị file 3D
function Dinosaur(){
    const { scene } = useGLTF("/models/dinosaur.glb");
    return (
        <Center>
            <primitive object={scene} scale={1} />
        </Center>
    );
    
}

export default function ModelViewer() {
    return(
        <div className="h-125 w-full rounded-xl bg-slate-100 flex flex-col justify-center items-center">
            <Canvas camera={{ position: [10, 1, 15], fov: 45 }} className="w-full h-full">
                {/* Ánh sáng chiếu toàn bộ vật thể */}
                <ambientLight intensity={1} />

                <Dinosaur />

                {/* Cho phép phóng to, thu nhỏ */}
                <OrbitControls />
            </Canvas>
        </div>
    );
}