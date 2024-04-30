import { animated, useSpring } from "@react-spring/web";

export default function Start() {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
    // to: { y: 100 },
  }));

  const handleClick = () => {
    api.start({
      //   from: {
      //     x: 0,
      //   },
      to: {
        x: 600,
        immediate: true,
      },
    });
  };

  return (
    <>
      <animated.div
        style={{
          width: 80,
          height: 80,
          background: "#ff6d6d",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...springs,
        }}
      >
        <div>start</div>
      </animated.div>
      <button onClick={handleClick}>click</button>
    </>
  );
}
