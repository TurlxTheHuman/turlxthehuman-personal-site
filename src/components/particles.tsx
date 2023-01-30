import { useState, useCallback } from 'react';
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";



function Particle() {

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
}, []);

  return (
    <div className=''>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#111518",
                    },
                },
                fpsLimit: 120,
                particles: {
                    color: {
                        value: "#1E8036",
                    },
                    links: {
                        color: "#1E8036",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 5,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 650,
                        },
                        value: 50,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    }
                },
                detectRetina: false,
            }}
        />
    </div>
  )
}

export default Particle
