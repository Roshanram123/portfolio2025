"use client"

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

interface VideoBackgroundProps {
  videoSrc: string;
}

const DynamicParticles = dynamic(() => import('./Particles'), { ssr: false, loading: () => null });

export default function VideoBackground({ videoSrc }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Set video properties for better performance
      videoRef.current.playbackRate = 1.0;
      videoRef.current.preload = "auto";
      
      // Handle video loading
      const handleCanPlay = () => {
        videoRef.current?.play().catch(error => {
          console.error("Error playing video:", error);
        });
      };

      // Add event listeners
      videoRef.current.addEventListener('canplay', handleCanPlay);
      
      // Cleanup
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('canplay', handleCanPlay);
        }
      };
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Particles Canvas background */}
      <div className="absolute inset-0">
        <Canvas camera={{ fov: 40, position: [0, 0, 2] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars 
            radius={100} 
            depth={50} 
            count={5000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1} 
          />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <DynamicParticles />
        </Canvas>
      </div>
      {/* Video overlay */}
      <div className="absolute inset-0 scale-110">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)',
            backfaceVisibility: 'hidden',
            perspective: '1000px',
            WebkitBackfaceVisibility: 'hidden',
            WebkitPerspective: '1000px',
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div 
          className="absolute inset-0 bg-black/50"
          style={{
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        />
      </div>
    </div>
  );
} 