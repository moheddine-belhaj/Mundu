import React, { useState, useEffect } from "react";
import { View, Dimensions, Alert } from "react-native";

import RouteMap from "../../components/RouteMap";
import CarTypes from "../../components/CarTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute, useNavigation } from "@react-navigation/native";
import Buttonn from "../../components/form/Button";
import OrderScreen from "../OrderScreen";

const SearchResults = (props) => {
  const navigation = useNavigation();
  const [id, setId] = useState("");
  const typeState = useState(null);
  const route = useRoute();
  console.log(route.params);
  //onSubmit
  const onSubmit = async () => {
    console.log(typeState);
    navigation.navigate("Order");
  };
  //importer les donner

  // useEffect(() => {}, []);

  //delete function
  const Delete = async (props) => {
    fetch("http://10.0.2.2:3000/DEL" + "60a85fdae51f4a42e8ca4765", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(async (data) => {
        try {
          navigation.navigate("Home");
        } catch (e) {
          console.log("error hai", e);
        }
      });
  };

  const Boiler = async () => {
    const orderToken = await AsyncStorage.getItem("orderToken");
    fetch("http://10.0.2.2:3000/", {
      headers: new Headers({
        Authorization: "Bearer " + orderToken,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setId(data.id);
        console.log("2", data.id);
      });
  };
  useEffect(() => {
    Boiler();
  }, []);
  return (
    <View style={{ display: "flex", justifyContent: "space-between" }}>
      <View style={{ height: Dimensions.get("window").height - 370 }}>
        <RouteMap />
      </View>

      <View
        style={{
          height: 300,
          marginTop: 70,
          flexDirection: "row",
          alignSelf: "center",
        }}
      >
        <OrderScreen />
      </View>
    </View>
  );
};

export default SearchResults;

/**
 * 
 * //
 * const typeState = useState(null);

  const route = useRoute();
  const navigation = useNavigation();

  const { originPlace, destinationPlace } = route.params;

  const onSubmit = async () => {
    const [type] = typeState;
    if (!type) {
      return;
    }

    // submit to server
    try {
      const userInfo = await Auth.currentAuthenticatedUser();

      const date = new Date();
      const input = {
        createdAt: date.toISOString(),
        type,
        originLatitude: originPlace.details.geometry.location.lat,
        oreiginLongitude: originPlace.details.geometry.location.lng,

        destLatitude: destinationPlace.details.geometry.location.lat,
        destLongitude: destinationPlace.details.geometry.location.lng,

        userId: userInfo.attributes.sub,
        carId: "1",
        status: "NEW",
      };

      const response = await API.graphql(
        graphqlOperation(createOrder, {
          input: input,
        })
      );

      console.log(response);

      navigation.navigate("OrderPage", { id: response.data.createOrder.id });
    } catch (e) {
      console.error(e);
    }
  };
 */
