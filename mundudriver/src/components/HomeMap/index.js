import React from "react";

import { View, Text, StatusBar, Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import cars from "../../data/cars";
const HomeMap = (props) => {
  const getImage = (type) => {
    if (type === "UberX") {
      return require("../../data/image/whiteCar.png");
    }
    if (type === "Comfort") {
      return require("../../data/image/whiteCar.png");
    }
    return require("../../data/image/whiteCar.png");
  };
  return (
    <>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <View
        style={{
          height: 500,

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
          {cars.map((car) => (
            <Marker
              key={car.id}
              coordinate={{ latitude: car.latitude, longitude: car.longitude }}
            >
              <Image
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: "contain",
                  transform: [
                    {
                      rotate: `${car.heading}deg`,
                    },
                  ],
                }}
                source={getImage(car.type)}
              />
            </Marker>
          ))}
        </MapView>
      </View>
    </>
  );
};
export default HomeMap;
