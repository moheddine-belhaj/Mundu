import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useTheme, Avatar } from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ProfileInput = ({ icon, label }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inside}>
        <Icon style={styles.icon} name={icon} color={"#0026B4"} size={22} />
        <Text style={{ fontSize: 18, color: "#878787", fontWeight: "bold" }}>
          {label}
        </Text>
      </View>
    </View>
  );
};

export default ProfileInput;

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",

    height: 40,
    width: "100%",
  },
  inside: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 20,
    marginLeft: 30,
  },
});
