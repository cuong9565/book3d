"use client"

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";
import { clone } from "three/examples/jsm/utils/SkeletonUtils.js";

interface ModelViewerProps {
  modelPath: string;
  bgPath: string;
}

function ModelRender({modelPath}: {modelPath: string}){
    const { scene } = useGLTF(modelPath);

    const model = useMemo(() => {
        return clone(scene);
    }, [scene]);

    // Tính tâm trên clone
    const position = useMemo(() => {
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());

        return [-center.x, -center.y, -center.z - 5] as [
            number,
            number,
            number
        ];
    }, [model]);

    return (
        <primitive
            object={model}
            position={position}
        />
    );
}

export default function ModelViewer({modelPath, bgPath}: ModelViewerProps) {
    return(
        <div className="relative h-full w-full rounded-xl bg-slate-100 flex flex-col justify-center items-center">
            {/* Lớp phủ ảnh UI tĩnh */}
            <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
                <img 
                    src={bgPath} 
                    alt="Overlay" 
                    className="w-full h-full object-cover" 
                />
            </div>

            {/* Canvas 3D */}
            <Canvas camera={{ position: [10, 1, 15], fov: 45 }} className="w-full h-full">
                {/* Ánh sáng chiếu toàn bộ vật thể */}
                <ambientLight intensity={1} />
                {/* Mô hình vật thể */}
                <ModelRender modelPath={modelPath}/>
                {/* Cho phép phóng to, thu nhỏ */}
                <OrbitControls />
            </Canvas>
        </div>
    );
}