import React from "react";
import Particles from "react-particles-js";

const ParticlesBackground = ({ image }) => {
  return (
    <div className="particle">
      <Particles
        height="100vh"
        width="100%"
        params={{
          particles: {
            number: {
              value: 8,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 1,
              out_mode: "out",
            },
            shape: {
              type: ["image"],
              image: [
                {
                  src: image,
                  height: 20,
                  width: 23,
                },
              ],
            },
            color: {
              value: "#CCC",
            },
            size: {
              value: 30,
              random: false,
              anim: {
                enable: true,
                speed: 4,
                size_min: 10,
                sync: false,
              },
            },
          },
          retina_detect: false,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
