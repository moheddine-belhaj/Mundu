import React from "react";
import { Text } from "react-native";
import {
  SectionRow,
  SettingsPage,
  NavigateRow,
  BaseRow,
  CheckRow,
  SwitchRow,
} from "react-native-settings-view";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <SettingsPage>
      <SectionRow>
        <NavigateRow
          text="Terms and conditions"
          leftIcon={{
            name: "file-document",
            type: "material-community",
          }}
          onPress={() => {
            navigation.navigate("Terms");
          }}
        />
        <NavigateRow
          text="Privacy Policy"
          leftIcon={{
            name: "folder-lock",
            type: "material-community",
          }}
          onPress={() => {
            navigation.navigate("Privacy");
          }}
        />
        <NavigateRow
          text="Contact us"
          leftIcon={{
            name: "users",
            type: "font-awesome",
          }}
          onPress={() => {
            navigation.navigate("Support");
          }}
        />
        <CheckRow
          text="Notifications"
          checked
          leftIcon={{
            name: "ios-notifications",
            type: "ionicon",
          }}
          onValueChange={(isChecked) => console.log("checked", isChecked)}
        />
        <SwitchRow
          text="Do not disturb"
          enabled
          leftIcon={{
            name: "do-not-disturb",
            type: "material-community",
          }}
          onValueChange={(isEnabled) => console.log("checked", isEnabled)}
        />
        <BaseRow
          text={"version"}
          leftIcon={{
            name: "tag",
            type: "font-awesome",
          }}
          rightContent={<Text>0.1.0</Text>}
        />
      </SectionRow>
    </SettingsPage>
  );
};

export default SettingsScreen;
