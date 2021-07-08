import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Pressable } from "react-native";
import { Button } from "react-native-paper";
const Buttonn = ({ label, onSubmit, ...OtherProsps }) => {
  return (
    <Button
      {...OtherProsps}
      style={[
        {
          padding: 5,
          margin: 2,
          backgroundColor: "black",
          alignItems: "center",
          width: "40%",
          alignSelf: "center",
        },
      ]}
    >
      <Text style={{ color: "white", fontWeight: "bold" }}>{label}</Text>
    </Button>
  );
};
const styles = StyleSheet.create({});

export default Buttonn;
