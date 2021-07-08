import React, { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "./ProfileScreen";
import { DrawerContent } from "../SideBar/DrawerContent";
import SupportScreen from "./Settings/SupportScreen";
import HomeSc from "./HomeSc";
import SettingsScreen from "./SettingsScreen";

import { useTheme } from "@react-navigation/native";
import SearchResults from "./SearchResults";
import Historique from "../components/form/Historique";

const Drawer = createDrawerNavigator();
const HomeScreen = (props) => {
  const [email, setEmail] = useState("loading");
  const [name, setName] = useState("loading");
  const Boiler = async () => {
    const token = await AsyncStorage.getItem("token");
    fetch("http://10.0.2.2:3000/", {
      headers: new Headers({
        Authorization: "Bearer " + token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setEmail(data.email);
        setName(data.name);
      });
  };
  useEffect(() => {
    Boiler();
  }, []);

  const logout = (props) => {
    AsyncStorage.removeItem("token").then(() => {
      props.navigation.replace("login");
    });

    const { colors } = useTheme();

    const theme = useTheme();
  };

  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeSc} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Support" component={SupportScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="SearchResults" component={SearchResults} />
    </Drawer.Navigator>
  );
};

export default HomeScreen;
