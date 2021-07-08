import React from "react";
import { View } from "react-native";
import AnimatedProgress from "react-native-reanimated-progress-bar";
import Animated, {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

const ProgBar = () => {
  const tY = useSharedValue(0);
  const width = interpolate(tY.value, [10, 100], [40, 200], Extrapolate.CLAMP);
  return (
    <View style={{ alignSelf: "center" }}>
      <AnimatedProgress
        fill="light-blue" // fill of progress bar
        current={2} // current position current/total
        total={5} // total parts for iterations
        style={{ height: 6 }} // container style
      />
    </View>
  );
};

export default ProgBar;
