import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
export default function Spring() {
  const [state, setState] = useState(0);

  const [props, api] = useSpring(
    () => ({
      loop: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
    }),
    []
  );
  return (
    <div>
      <animated.div style={props}>hello</animated.div>
      <button onClick={() => setState(state + 1)}>{state}</button>
    </div>
  );
}
