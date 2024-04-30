import { Spring, useSpring } from "@react-spring/web";
// import React from "react";
import { animated } from "@react-spring/web";

export default function Component() {
//   const springs = useSpring({
//     from: { x: 0 },
//     to: { x: 100 },
//   });

  return (
    <div>
      <Spring from={{ x: 0 }} to={{ x: 10 }}>
        {(style) => (
          <animated.div
            style={{
              ...style,
              width: 80,
              height: 80,
              background: "#ff6d6d",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            //   ...springs
            }}
          >
            dsdas
          </animated.div>
        )}
      </Spring>
    </div>
  );
}
