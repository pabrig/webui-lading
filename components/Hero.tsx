import React, { FC } from "react";

const Hero: FC = () => {
  return (
    <div>
      <h2>Web UI Dev</h2>
      <style jsx>{`
      :global(.hero) {
          color:red;
      }
        }
      `}</style>
    </div>
  );
};

export default Hero;
