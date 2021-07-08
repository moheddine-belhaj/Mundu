import React from "react";

import { View, Text, StatusBar, Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

const GOOGLE_MAPS_APIKEY = "AIzaSyB5dZJEfjjo40CekywB9Z8Pn75oieGoupc";

const RouteMap = ({ origin, destination }) => {
  const originLoc = {
    latitude: 36.822237,
    longitude: 10.194657,
  };

  const destinationLoc = {
    latitude: 36.818905,
    longitude: 10.184515,
  };
  return (
    <>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <View
        style={{
          height: 800,

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={{ width: "100%", height: "100%" }}
          region={{
            latitude: 36.821258,
            longitude: 10.192753,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          showsUserLocation={true}
          showsMyLocationButton={true}
        >
          <MapViewDirections
            origin={originLoc}
            destination={destinationLoc}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={5}
            strokeColor="black"
          />
          <Marker coordinate={destinationLoc} title={destination} />
          <Marker coordinate={originLoc} title={origin} />
        </MapView>
      </View>
    </>
  );
};
export default RouteMap;
