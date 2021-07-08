import React, { useState } from "react";
import { View, Text, Button, StyleSheet, StatusBar } from "react-native";
import { useTheme } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import CovidMessage from "../components/CovidMessage";
import HomeSearch from "../components/HomeSearch";
import HomeMap from "../components/HomeMap";
import RouteMap from "../components/RouteMap";
import DestinationSearch from "../components/DestinationSearch";
import { Home } from "@material-ui/icons";
import SearchResults from "./SearchResults";
import ProfileScreen from "./ProfileScreen";
import CarTypeRow from "../components/CarTypeRow";
import CarTypes from "../components/CarTypes";
import Order from "../components/Order/index";
import Loading from "../components/form/Loading";
import OrderToMe from "../components/Order/OrderToMe";
import OrderToOther from "../components/Order/OrderToOther";
import SupportScreen from "./Settings/SupportScreen";
const HomeSc = ({ navigation }) => {
  const { colors } = useTheme();
  const [condition, setCondition] = useState("1");
  const theme = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
      <SupportScreen />
    </View>
  );
};
export default HomeSc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

/**
 * 
 * 
 * <Icon.Button
          name="ios-menu"
          size={25}
          backgroundColor="#009387"
          onPress={() => navigation.openDrawer()}
        ></Icon.Button>



          <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={{ width: "100%", height: "100%" }}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        ></MapView>
 */
