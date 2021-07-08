import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";
import { Text, View, StyleSheet } from "react-native";

export default class NavScreen extends Component {
  render() {
    return (
      <View>
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity
            style={{ alignItems: "flex-end", margin: 15 }}
            onPress={this.props.navigation.openDrawer}
          ></TouchableOpacity>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={styles.text}>{this.props.name} Screen</Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},

  text: {
    color: "black",
    fontSize: 15,
  },
});
