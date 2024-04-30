import { animated, useSpring } from "@react-spring/web";
import { styled } from "@stitches/react";
import Sample from "./Sample";

export default function AniElem() {
  const anidi = animated(<Sample />);
  const MyModal = styled(animated.div, {
    width: "40vw",
    height: "20vh",
    borderRadius: "8px",
    backgroundColor: "$white80",
  });

  const styles = useSpring({
    from: {
      opacity: 0,
      y: "6%",
    },
    to: {
      opacity: 1,
      y: 0,
    },
  });
  return (
    <div>
      <anidi style={styles} />
    </div>
  );
}
