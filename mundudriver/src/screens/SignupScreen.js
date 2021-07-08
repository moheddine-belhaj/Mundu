import React, { useState } from "react";
import { Button } from "react-native-paper";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Input, Block } from "galio-framework";
import AsyncStorage from "@react-native-async-storage/async-storage";
const SignupScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");

  const sendCred = async (props) => {
    fetch("http://10.0.2.2:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        email: email,
        password: password,
        adress: adress,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        try {
          await AsyncStorage.setItem("token", data.token);
          props.navigation.replace("home");
        } catch (e) {
          console.log("error hai", e);
        }
      });
  };
  return (
    <>
      <StatusBar backgroundColor="blue" barStyle="light-content" />

      <ImageBackground
        source={require("../data/image/loginbg.png")}
        style={{ flex: 1, width: null, height: null }}
      >
        <Image
          source={require("../data/image/userLogin.png")}
          style={{
            marginTop: 30,
            height: 120,
            width: 120,

            alignSelf: "center",
          }}
        />
        <KeyboardAwareScrollView>
          <View style={styles.mainContainer}>
            <Block style={styles.container}>
              <Input
                style={styles.input}
                name="full name"
                placeholder="full name"
                placeholderTextColor="#4F8EC9"
                left
                icon="account-box"
                family="MaterialCommunityIcons"
                iconSize={16}
                iconColor="black"
                rounded
                onChangeText={(text) => setName(text)}
              />

              <Input
                style={styles.input}
                name="email"
                placeholder="email"
                placeholderTextColor="#4F8EC9"
                left
                icon="email"
                family="MaterialCommunityIcons"
                iconSize={16}
                iconColor="black"
                rounded
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
              />
              <Input
                style={styles.input}
                name="password"
                placeholder="password"
                placeholderTextColor="#4F8EC9"
                rounded
                password
                viewPass
                icon="lock"
                family="MaterialCommunityIcons"
                iconSize={16}
                iconColor="black"
                onChangeText={(text) => {
                  setPassword(text);
                }}
              />
              <Input
                style={styles.input}
                name="password"
                placeholder="password"
                placeholderTextColor="#4F8EC9"
                rounded
                password
                viewPass
                icon="lock"
                family="MaterialCommunityIcons"
                iconSize={16}
                iconColor="black"
              />
              <Input
                style={styles.input}
                name="phone"
                placeholder="Phone"
                placeholderTextColor="#4F8EC9"
                left
                icon="phone"
                family="MaterialCommunityIcons"
                iconSize={16}
                iconColor="black"
                rounded
                onChangeText={(text) => setPhone(text)}
                keyboardType="phone-pad"
              />
              <Input
                style={styles.input}
                name="Adress"
                placeholder="Adress"
                placeholderTextColor="#4F8EC9"
                left
                icon="location-city"
                family="MaterialCommunityIcons"
                iconColor="black"
                iconSize={16}
                rounded
                onChangeText={(text) => setAdress(text)}
              />
            </Block>

            <Button
              mode="contained"
              style={{
                alignSelf: "center",
                width: "50%",
                marginTop: 18,
                borderRadius: 20,
                backgroundColor: "#0026B4",
              }}
              onPress={() => sendCred(props)}
            >
              Sign up
            </Button>
            <TouchableOpacity>
              <Text
                style={{
                  width: "70%",
                  fontSize: 18,
                  marginLeft: 18,
                  marginTop: 70,
                  borderWidth: 1,
                  paddingLeft: 15,
                  alignSelf: "center",
                  padding: 2,
                  borderRadius: 17,
                  color: "white",
                  borderColor: "white",
                }}
                onPress={() => props.navigation.replace("login")}
              >
                already have a account
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    height: 50,
  },
  mainContainer: {
    margin: 20,

    padding: 20,
  },
  background: {
    marginTop: 20,
  },
});
export default SignupScreen;
