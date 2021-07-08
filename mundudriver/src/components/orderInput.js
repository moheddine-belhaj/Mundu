import React from "react";
import { Input } from "galio-framework";
import { View, StyleSheet, Text } from "react-native";
import { useTheme, Avatar } from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const OrderInput = ({ label, ...otherProps }) => {
  return (
    <View style={{ marginBottom: 2, width: "103%" }}>
      <View style={styles.container}>
        <Input
          {...otherProps}
          style={styles.input}
          left
          family="MaterialCommunityIcons"
          iconSize={25}
          iconColor="#858585"
          placeholder={label}
          fontSize={18}
          placeholderTextColor="#000"
        >
          <Text
            style={{
              fontSize: 15,
              color: "#000",
              fontWeight: "bold",
              marginLeft: 20,
            }}
          ></Text>
        </Input>
      </View>
    </View>
  );
};

export default OrderInput;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignSelf: "center",
    width: "80%",
  },

  icon: {
    marginRight: 40,
    marginLeft: 30,
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#000",
    width: "100%",
    height: 45,
  },
});
