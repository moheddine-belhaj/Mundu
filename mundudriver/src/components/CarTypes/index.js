import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./styles.js";
import CarTypeRow from "../CarTypeRow";
import { useNavigation } from "@react-navigation/native";
import typesData from "../../data/types";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const CarTypes = ({ typeState, onSubmit }) => {
  const navigation = useNavigation();
  const [selectedType, setselectedType] = typeState;
  return (
    <View style={{ marginTop: 20 }}>
      {typesData.map((type) => (
        <CarTypeRow
          type={type}
          isSelected={type.type === selectedType}
          onPress={() => setselectedType(type.type)}
          key={type.id}
        />
      ))}
    </View>
  );
};

export default CarTypes;

/**
 * 
 *   <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginLeft: 20,
        }}
      >
        Choose your ride
      </Text>
 */
