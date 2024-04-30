import { useSpringValue, animated } from "@react-spring/web";

export default function SpringValue() {
  const opacity = useSpringValue(0, {
    config: {
      mass: 2,
      friction: 5,
      tension: 80,
    },
  });
  const handleClick = () => opacity.start(1);
  return (
    <div>
      <animated.div style={{ opacity }} >
        hello world
      </animated.div>
      <button onClick={handleClick}>start</button>
    </div>
  );
}
