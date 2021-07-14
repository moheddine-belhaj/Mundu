import React, { useState, useEffect } from "react";
import { View, TextInput, SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import styles from "./styles.js";
import PlaceRow from "./PlaceRow";
import Buttonn from "../form/Button";
import Conteur from "../RouteMap/conteur.js";
import { Text } from "react-native";

const homePlace = {
  description: "Home",
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: "Work",
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const DestinationSearch = (props) => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const navigation = useNavigation();

  const checkNavigationToMe = () => {
    navigation.navigate("OrderToMe", {
      originPlace,
      destinationPlace,
    });
  };

  const checkNavigationToOther = () => {
    navigation.navigate("OrderToOther", {
      originPlace,
      destinationPlace,
    });
  };

  useEffect(() => {}, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Deliver from?"
          onPress={(data, details = null) => {
            setOriginPlace({ data, details });
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          currentLocation={true}
          currentLocationLabel="Current location"
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: "AIzaSyBjuzZVZgBURgFzeOOTftWiO2hQpPlMll0",
            language: "en",
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />

        <GooglePlacesAutocomplete
          placeholder="Deliver to?"
          onPress={(data, details = null) => {
            setDestinationPlace({ data, details });
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteContainer,
              top: 55,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: "AIzaSyBjuzZVZgBURgFzeOOTftWiO2hQpPlMll0",
            language: "en",
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        />

        {/* Circle near Origin input */}
        <View style={styles.circle} />

        {/* Line between dots */}
        <View style={styles.line} />

        {/* Square near Destination input */}
        <View style={styles.square} />

        <Button
          mode="contained"
          style={[
            {
              marginTop: 600,
              backgroundColor: "black",
              alignItems: "center",
              width: "40%",
              alignSelf: "center",
            },
          ]}
          onPress={() => {
            checkNavigationToMe();
          }}
        >
          next
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;

/**
 *  <Button
          mode="contained"
          style={[
            {
              marginTop: 30,
              backgroundColor: "black",
              alignItems: "center",
              width: "40%",
              alignSelf: "center",
            },
          ]}
          onPress={() => {
            checkNavigationToOther();
          }}
        >
          next
        </Button>
 */
