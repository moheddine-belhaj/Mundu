import React from "react";
import { Animated, Easing } from "react-native";
import LottieView from "lottie-react-native";

export default class BasicExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  }

  render() {
    return (
      <LottieView
        source={require("../../data/animation/Loading.json")}
        progress={this.state.progress}
      />
    );
  }
}
