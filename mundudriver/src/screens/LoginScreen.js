import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import { Input, Block } from "galio-framework";
import { Formik, useFormik } from "formik";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Yup from "yup";
import ErrorMessage from "../components/form/ErrorMessage";
import { useNavigation } from "@react-navigation/native";
const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  // login function
  const sendCred = async (props) => {
    fetch("http://10.0.2.2:3000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        try {
          await AsyncStorage.setItem("token", data.token);

          navigation.replace("home");
        } catch (error) {
          // console.log("error hai", error);
        }
      });
  };

  function refreshPage() {
    window.location.reload(false);
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });
  return (
    <>
      <StatusBar backgroundColor="blue" barStyle="light-content" />

      <ImageBackground
        source={require("../data/image/loginbg.png")}
        style={{ flex: 1, width: null, height: null }}
      >
        <Image
          source={require("../data/image/logologin.png")}
          style={{
            height: 300,
            width: 300,

            alignSelf: "center",
          }}
        />

        <KeyboardAwareScrollView>
          <View style={styles.mainContainer}>
            <Block style={styles.container}>
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => {
                  try {
                    setEmail(values.email);
                    setPassword(values.password);
                    sendCred();
                  } catch (error) {}
                }}
                validationSchema={validationSchema}
              >
                {({
                  handleChange,
                  handleSubmit,
                  errors,
                  setFieldTouched,
                  touched,
                }) => (
                  <>
                    <Input
                      style={styles.input}
                      placeholder="email"
                      placeholderTextColor="#4F8EC9"
                      left
                      icon="account-box"
                      family="MaterialCommunityIcons"
                      iconSize={16}
                      iconColor="black"
                      rounded
                      keyboardType="email-address"
                      onBlur={() => setFieldTouched("email")}
                      onChangeText={handleChange("email")}
                    />
                    {
                      <ErrorMessage
                        error={errors.email}
                        visible={touched.email}
                      />
                    }
                    <Input
                      style={styles.input}
                      placeholder="password"
                      placeholderTextColor="#4F8EC9"
                      rounded
                      password
                      viewPass
                      icon="lock"
                      family="MaterialCommunityIcons"
                      iconSize={16}
                      iconColor="black"
                      onBlur={() => setFieldTouched("password")}
                      onChangeText={handleChange("password")}
                    />
                    <ErrorMessage
                      error={errors.password}
                      visible={touched.password}
                    />
                    <Button
                      mode="contained"
                      style={{
                        width: "50%",
                        alignSelf: "center",
                        marginTop: 18,
                        borderRadius: 20,
                        backgroundColor: "#0026B4",
                      }}
                      onPress={handleSubmit}
                    >
                      Login
                    </Button>
                  </>
                )}
              </Formik>
            </Block>

            <TouchableOpacity>
              <Text
                style={{
                  width: "60%",
                  fontSize: 18,
                  paddingLeft: 30,
                  marginTop: 150,
                  borderWidth: 1,
                  alignSelf: "center",
                  padding: 2,
                  borderRadius: 15,
                  color: "white",
                  borderColor: "white",
                }}
                onPress={() => props.navigation.replace("signup")}
              >
                create account
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

export default LoginScreen;

/**
 * 
 *  <Text
          style={{
            fontSize: 20,
            marginLeft: 18,
            marginTop: 20,
          }}
        >
          Login with email
        </Text>
        <TextInput
          name="email"
          label="Email"
          mode="outlined"
          value={email}
          style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
          theme={{ colors: { primary: "blue" } }}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          label="password"
          mode="outlined"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
          theme={{ colors: { primary: "blue" } }}
        />
        <Button
          mode="contained"
          style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
          onPress={() => sendCred(props)}
        >
          Login
        </Button>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              marginLeft: 18,
              marginTop: 20,
            }}
            onPress={() => props.navigation.replace("signup")}
          >
            dont have a account ?
          </Text>
        </TouchableOpacity>

  <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
            onChangeText={(text) => setEmail(text)}
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
            onChangeText={(text) => {
              setPassword(text);
            }}
          />

 */
