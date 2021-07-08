import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";

export default class BasicExample extends React.Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    this.animation.play(30, 120);
  }

  render() {
    return (
      <View style={{ height: 160 }}>
        <LottieView
          ref={(animation) => {
            this.animation = animation;
          }}
          source={require("../../data/animation/contact.json")}
        />
      </View>
    );
  }
}
