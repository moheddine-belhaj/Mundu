import React, { useEffect, useState, useMemo } from "react";
import "react-native-gesture-handler";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SignupScreen from "./src/screens/SignupScreen";
import LoginScreen from "./src/screens/LoginScreen";
import LoadingScreen from "./src/screens/LoadingScreen";
import HomeSceen from "./src/screens/HomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "./src/components/context";
import { PermissionsAndroid, Platform } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import DestinationSearch from "./src/components/DestinationSearch";
import SettingsScreen from "./src/screens/SettingsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import Order from "./src/components/Order";
import SearchResults from "./src/screens/SearchResults";
import OrderToMe from "./src/components/Order/OrderToMe";
import OrderToOther from "./src/components/Order/OrderToOther";
import Terms from "./src/screens/Settings/Terms";
import Privacy from "./src/screens/Settings/Privacy";
import HistoriqueScreen from "./src/screens/Historique/HistoriqueScreen";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
navigator.geolocation = require("@react-native-community/geolocation");

const App: () => React$Node = () => {
  //location permission
  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "mundo App ask Permission",
          message:
            "mundo App needs access to your location " +
            "so you can take awesome rides.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if (Platform.OS === "android") {
      androidPermission();
    } else {
      // IOS
      Geolocation.requestAuthorization();
    }
  });

  const [isloggedin, setLogged] = useState(null);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const detectLogin = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  };

  /**dark mode */

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: "#ffffff",
      text: "#333333",
    },
  };
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: "#333333",
      text: "#ffffff",
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const authContext = useMemo(
    () => ({
      toggleTheme: () => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      },
    }),
    []
  );

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="loading" component={LoadingScreen} />
            <Stack.Screen name="home" component={HomeSceen} />
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="signup" component={SignupScreen} />
            <Stack.Screen
              name="DestinationSearch"
              component={DestinationSearch}
            />
            <Stack.Screen name="Historique" component={HistoriqueScreen} />
            <Stack.Screen name="OrderToMe" component={OrderToMe} />
            <Stack.Screen name="OrderToOther" component={OrderToOther} />
            <Stack.Screen name="Terms" component={Terms} />
            <Stack.Screen name="Privacy" component={Privacy} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="SearchResults" component={SearchResults} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;

/**
 *
 *
 */
