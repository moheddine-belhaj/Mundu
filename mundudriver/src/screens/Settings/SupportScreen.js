import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AnimationMain from "./AnimationMain";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Button } from "react-native-paper";
import PhoneCall from "./PhoneCall";

function LocationScreen() {
  const originLoc = {
    latitude: 36.822237,
    longitude: 10.194657,
  };
  return (
    <>
      <View style={{ margin: 5 }}>
        <Text style={{ fontWeight: "bold" }}>Address :</Text>
        <Text>
          Rue Hamed E Ghazeli, Cité Monplaisir et Borgel, Centre MISK, App B5
          1er étage، Tunis 1073
        </Text>
      </View>

      <View style={styles.map}>
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
          <Marker coordinate={originLoc} title={"The way Centre"} />
        </MapView>
      </View>
    </>
  );
}

function NotificationsScreen() {
  const UselessTextInput = (props) => {
    return (
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={200}
      />
    );
  };

  const [value, onChangeText] = React.useState("Hi,..");

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ margin: 5, marginBottom: 40, marginTop: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          Send us your your problem or your question dans we will replie to your
          email as soon as possible .
        </Text>
      </View>

      <View
        style={{
          marginTop: 5,
          backgroundColor: value,
          borderColor: "#000000",
          borderWidth: 1,
          height: 150,
          width: "85%",
          borderRadius: 5,
        }}
      >
        <UselessTextInput
          multiline
          numberOfLines={4}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
      </View>
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => {
          console.log(value);
        }}
      >
        Send
      </Button>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", margin: 5, marginTop: 10 }}>
      <Text style={{ fontWeight: "bold", fontSize: 15 }}>
        We have for a phone number available everyday from 08:00 AM to 05:00 PM
        to serve you in case you have a problem or question .
      </Text>

      <View style={styles.phone}>
        <PhoneCall number={"95 650 845"} />
        <View style={styles.seperateur} />
        <PhoneCall number={"71 906 301"} />
      </View>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: "#5473FF",
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: "#FFF" },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={LocationScreen}
        options={{ tabBarLabel: "Location" }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ tabBarLabel: "Email" }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: "Phone" }}
      />
    </Tab.Navigator>
  );
}
export default function ContactUs() {
  return (
    <View style={{ flex: 1, height: 50 }}>
      <AnimationMain />

      <MyTabs />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
  },
  map: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderColor: "#000",
    borderWidth: 1,
    height: 50,
  },
  input: {
    height: 100,
    width: "80%",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
  },
  button: {
    alignSelf: "center",
    width: "40%",
    marginTop: 50,
    borderRadius: 5,
    backgroundColor: "black",
  },
  seperateur: {
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    margin: 2,
  },
  phone: {
    marginTop: 50,
  },
});
