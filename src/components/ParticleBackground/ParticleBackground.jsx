import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticleBackground() {
  const particlesInit = async engine => {
    // load the tsparticles bundle
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 30,
        particles: {
          number: {
            value: 30,
            density: { enable: true, area: 800 }
          },
          color: { value: "#007BFF" },               // use your hero-blue or accent
          opacity: {
            value: 0.08,
            random: { enable: true, minimumValue: 0.02 }
          },
          size: {
            value: 3,
            random: { enable: true, minimumValue: 1 }
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            outModes: "out"
          }
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: { enable: false },
            onClick: { enable: false }
          }
        },
        detectRetina: true,
        background: { opacity: 0 } // fully transparent
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none"
      }}
    />
  );
}
