import React, { useState, useEffect } from "react";
import {
  View,
  Dimensions,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";

import { Button } from "react-native-paper";
import OrderInput from "../orderInput";
import CarTypes from "../CarTypes";
import { useRoute, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";
import { TouchableHighlight } from "react-native";
import LocationView from "../form/LocationView";

const OrderToMe = (props) => {
  const navigation = useNavigation();
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [origin, setOrigin] = useState("null");
  const [distination, setDistination] = useState("null");
  const [poid, setPoid] = useState("1");
  const [qte, setQte] = useState("1");
  const [util, setUtil] = useState("voiture");
  const typeState = useState(null);
  const route = useRoute();
  const [totalp, setTotalp] = useState(1);
  const [totalq, setTotalq] = useState(1);

  //function
  const showAlert = () =>
    Alert.alert("success", "fellow your delivery", [
      {
        text: "ok",
      },
    ]);

  // console.log(route.params);
  const onSubmit = async (props) => {
    showAlert();
    navigation.navigate("SearchResults");
  };

  const sendCred = async (props) => {
    fetch("http://10.0.2.2:3000/Add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        util: util,
        origin: origin,
        distination: distination,
        clientName: clientName,
        clientPhone: clientPhone,
        poid: poid,
        qte: qte,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        try {
          navigation.navigate("SearchResults");
          // showAlert();
          setOrigin;
          console.log("ee", data.origin);
        } catch (e) {
          console.log("error hai", e);
        }
      });
  };

  const increaseP = () => {
    setTotalp(totalp + 1);
    setPoid(totalp);
  };
  const decreaseP = () => {
    setTotalp(totalp - 1);
    setPoid(totalp);
  };
  const increaseQ = () => {
    setTotalq(totalq + 1);
    setQte(totalq);
  };
  const decreaseQ = () => {
    setTotalq(totalq - 1);
    setQte(totalq);
  };

  return (
    <ScrollView style={styles.scroll}>
      <View style={{ marginTop: 10 }}>
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              alignSelf: "center",
              marginBottom: 10,
            }}
          >
            Create your delivery
          </Text>
        </View>
        <View
          style={{ backgroundColor: "#F5F5F5", padding: 5, borderRadius: 5 }}
        >
          <LocationView Locationfrom="tunis" LocationTo="arina" />
        </View>

        <View
          style={{
            backgroundColor: "#F5F5F5",
            margin: 2,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
            }}
          >
            <Text style={styles.text}>Poid : Kg</Text>
            <Button style={styles.touchable} onPress={decreaseP}>
              <Icon name="minus" color={"#0026B4"} size={13} />
            </Button>
            <Text style={styles.buttonText}>{totalp}</Text>
            <Button style={styles.touchable} onPress={increaseP}>
              <Icon name="plus" color={"#0026B4"} size={13} />
            </Button>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
            }}
          >
            <Text style={styles.text}>Quantite</Text>
            <Button style={styles.touchable} onPress={decreaseQ}>
              <Icon name="minus" color={"#0026B4"} size={13} />
            </Button>
            <Text style={styles.buttonText}>{totalq}</Text>
            <Button style={styles.touchable} onPress={increaseQ}>
              <Icon name="plus" color={"#0026B4"} size={13} />
            </Button>
          </View>
        </View>

        <OrderInput
          icon="account-box"
          label="name"
          onChangeText={(text) => setClientName(text)}
        />

        <OrderInput
          icon="phone"
          label="phone"
          onChangeText={(text) => setClientPhone(text)}
        />
        <CarTypes typeState={typeState} onSubmit={sendCred} />

        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <TouchableHighlight
            onPress={() => navigation.navigate("DestinationSearch")}
            underlayColor={"#B7F3E5"}
            style={[
              styles.container,
              {
                padding: 10,
                margin: 4,
                backgroundColor: "white",
                alignItems: "center",
                width: "40%",
                alignSelf: "center",
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 17,
              },
            ]}
          >
            <Icon name="arrow-left" color={"black"} size={17} />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={onSubmit}
            underlayColor={"#B7F3E5"}
            style={[
              styles.container,
              {
                padding: 10,
                margin: 4,
                backgroundColor: "black",
                alignItems: "center",
                width: "40%",
                alignSelf: "center",
                borderRadius: 17,
              },
            ]}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Confirm</Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  touchable: {
    minWidth: 35,
    minHeight: 35,
    borderWidth: 1,
    borderColor: "#27AAE1",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  scroll: {
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "blue",
    alignSelf: "center",
    fontWeight: "bold",
  },
  text: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "blue",
    fontSize: 15,
    alignItems: "flex-start",
    marginRight: 50,
    width: "23%",
  },
});

export default OrderToMe;
