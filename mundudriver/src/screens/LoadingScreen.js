import React, { useEffect } from "react";
import { Button, TextInput } from "react-native-paper";
import {
  ActivityIndicator,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../components/form/Loading";
const LoadingScreen = (props) => {
  const detectLogin = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      props.navigation.replace("home");
    } else {
      props.navigation.replace("login");
    }
  };
  useEffect(() => {
    detectLogin();
  }, []);

  return (
    <ImageBackground
      style={styles.image}
      source={require("../data/image/google-map-background.png")}
    >
      <View style={styles.loading}>
        <Loading />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default LoadingScreen;
