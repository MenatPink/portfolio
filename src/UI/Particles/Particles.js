import React, { PureComponent } from "react";
import Particles from "react-particles-js";

class ParticleScreen extends PureComponent {
  render() {
    return (
      <Particles
        params={{
          particles: {
            number: {
              value: 50
            },
            line_linked: {
              shadow: {
                enable: true,
                color: "#3CA9D1",
                blur: 10
              }
            }
          }
        }}
      />
    );
  }
}

export default ParticleScreen;
