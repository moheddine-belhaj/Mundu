import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Communications from "react-native-communications";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const PhoneCall = ({ number }) => {
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} name={"phone"} color={"#0026B4"} size={22} />
      <Text style={styles.text}>{number}</Text>
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => Communications.phonecall(number, true)}
      >
        Call
      </Button>
    </View>
  );
};

export default PhoneCall;
const styles = StyleSheet.create({
  icon: {
    marginRight: 20,
    marginLeft: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    flexDirection: "row",
    width: "100%",
    alignContent: "center",
    alignItems: "center",
    height: 50,
  },
  button: {
    fontSize: 12,
    fontWeight: "bold",
    alignSelf: "center",
  },
  button: {
    marginLeft: 120,
    alignSelf: "center",
    width: "20%",
    borderRadius: 5,
    backgroundColor: "black",
  },
});
