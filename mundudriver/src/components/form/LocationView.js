import color from "color";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const LocationView = ({ Locationfrom, LocationTo }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.input}>
          <Text
            style={{
              fontSize: 18,
              color: "#000",
              marginLeft: 10,
            }}
          >
            {Locationfrom}
          </Text>
        </View>

        <Icon
          name="assistant"
          color={"#A1FF8E"}
          size={20}
          style={styles.iconTop}
        />
        <View style={styles.line} />
        <Icon
          name="map-marker"
          color={"#D294FF"}
          size={22}
          style={styles.iconButtom}
        />
        <View style={styles.input}>
          <Text
            style={{
              fontSize: 18,
              color: "#000",
              marginLeft: 10,
            }}
          >
            {LocationTo}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LocationView;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginLeft: 15,
    borderRadius: 8,
    borderColor: "#000000",
    borderWidth: 1,
    height: 45,
    width: "85%",
    margin: 5,
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  line: {
    width: 1,
    height: 38,
    backgroundColor: "#D294FF",
    position: "absolute",
    top: 35,
    left: 18.5,
  },
  iconTop: {
    position: "absolute",
    top: 16,
    left: 9,
  },
  iconButtom: {
    position: "absolute",
    top: 70,
    left: 8,
  },
});
