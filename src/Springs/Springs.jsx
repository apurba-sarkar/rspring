import React from "react";
import { animated, useSprings } from "@react-spring/web";

export default function Springs() {
  const [springs, api] = useSprings(4, () => ({
    loop: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
  }));
  return (
    <div>
      {springs.map((props) => (
        // eslint-disable-next-line react/jsx-key
        <animated.div style={props}>Hello World</animated.div>
      ))}
    </div>
  );
}
