import React, { useEffect, useState, useContext } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Button } from "react-native-paper";
import { Avatar, Badge } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProfileInput from "./ProfileInput";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import ImagePicker from "react-native-image-crop-picker";

import SettingsScreen from "./SettingsScreen";

const ProfileScreen = ({ props }) => {
  const [image, setImage] = useState(
    "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
  );
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      console.log(image);
      setImage(image.path);
      bs.current.snapTo(1);
    });
  };

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={takePhotoFromCamera}
      >
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={choosePhotoFromLibrary}
      >
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}
      >
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      console.log(image);
      setImage(image.path);
      bs.current.snapTo(1);
    });
  };
  const navigation = useNavigation();

  const [email, setEmail] = useState("loading");
  const [name, setName] = useState("loading");

  const [phone, setPhone] = useState("loading");
  const [adress, setAdress] = useState("loading");

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
        setPhone(data.phone);
        setAdress(data.adress);
      });
  };
  useEffect(() => {
    Boiler();
  }, []);

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const bs = React.createRef();
  const fall = new Animated.Value(1);
  return (
    <>
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../data/image/loginbg.png")}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
          style={{
            alignSelf: "flex-start",
            position: "absolute",
            marginTop: 20,
            paddingLeft: 20,
          }}
        >
          <Icon name="arrow-left" color={"black"} size={30} />
        </TouchableOpacity>

        <BottomSheet
          ref={bs}
          snapPoints={[330, 0]}
          renderContent={renderInner}
          renderHeader={renderHeader}
          initialSnap={1}
          callbackNode={fall}
          enabledGestureInteraction={true}
        />
        <Text style={styles.title}>Account</Text>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
            <Avatar
              rounded
              size={85}
              containerStyle={{
                top: -50,
                left: 50,
                backgroundColor: "transparent",
              }}
              source={{
                uri: image,
              }}
            >
              <Avatar.Accessory size={25} color={"#000"} />
            </Avatar>
          </TouchableOpacity>
          <View style={{ marginBottom: 10 }}>
            <ProfileInput label={name} icon="account-outline" />
            <ProfileInput label={email} icon="email-outline" />
            <ProfileInput label={phone} icon="cellphone" />
            <ProfileInput label={adress} icon="map-marker-multiple-outline" />
          </View>

          <Button
            mode="contained"
            style={{
              alignSelf: "center",
              width: "50%",
              marginTop: 50,
              borderRadius: 20,
              backgroundColor: "#0026B4",
            }}
            onPress={() => {
              navigation.navigate("Settings");
            }}
          >
            Edit
          </Button>
        </View>
      </ImageBackground>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopLeftRadius: 39,
    borderTopRightRadius: 39,
    marginTop: 100,
  },
  image: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    alignSelf: "center",
    top: 23,
    fontWeight: "bold",
  },

  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
});
