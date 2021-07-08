import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import styles from "./styles.js";

import Ionicons from "react-native-vector-icons/Ionicons";

const CarTypeRow = (props) => {
  const { type, onPress, isSelected } = props;
  const getImage = () => {
    if (type.type === "Motor") {
      return require("../../data/image/motor.png");
    }
    if (type.type === "car") {
      return require("../../data/image/car.png");
    }
    return require("../../data/image/truck.png");
  };

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: isSelected ? "#84FC72" : "#F5F5F5",
        },
      ]}
    >
      {/*  Image */}
      <Image style={styles.image} source={getImage()} />

      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type} <Ionicons name={"person"} size={16} />3
        </Text>
        <Text style={styles.time}>8:03PM drop off</Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={"pricetag"} size={18} color={"#42d742"} />
        <Text style={styles.price}>{type.price} DT</Text>
      </View>
    </Pressable>
  );
};

export default CarTypeRow;
