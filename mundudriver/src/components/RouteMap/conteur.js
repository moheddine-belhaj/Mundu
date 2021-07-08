import React, { useEffect, useState } from "react";
import { View } from "react-native";

import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet, Text } from "react-native";

const Conteur = ({ label }) => {
  const [total, setTotal] = useState(0);

  const increase = () => {
    setTotal(total + 1);
  };

  const decrease = () => {
    setTotal(total - 1);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
      }}
    >
      <Text style={styles.text}>{label}</Text>
      <Button style={styles.touchable} onPress={decrease}>
        <Icon name="minus" color={"#0026B4"} size={18} />
      </Button>
      <Text style={styles.buttonText}>{total}</Text>
      <Button style={styles.touchable} onPress={increase}>
        <Icon name="plus" color={"#0026B4"} size={18} />
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  touchable: {
    minWidth: 35,
    minHeight: 35,
    borderWidth: 1,
    borderColor: "#27AAE1",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },

  buttonText: {
    fontSize: 20,
    color: "blue",
    alignSelf: "center",
    fontWeight: "bold",
  },
  text: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "blue",
    fontSize: 20,
    alignItems: "flex-start",
    marginRight: 50,
    width: "23%",
  },
});

export default Conteur;
