import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
const Privacy = () => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
        <View style={styles.allview}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Policy for the way centre
          </Text>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              navigation.navigate("Settings");
            }}
          >
            <Icon name={"arrow-left"} size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text>
            This Privacy Policy document contains types of information that is
            collected and recorded by Mundu and how we use it. {"\n"}If you have
            additional questions or require more information about our Privacy
            Policy, do not hesitate to contact us.
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Information we collect
          </Text>
          <Text>
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information.{"\n"}
            {"\n"}
            If you contact us directly, we may receive additional information
            about you such as your name, email address, phone number, the
            contents of the message and/or attachments you may send us, and any
            other information you may choose to provide. {"\n"} {"\n"}When you
            register for an Account, we may ask for your contact information,
            including items such as name, company name, address, email address,
            and telephone number.
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Log Files</Text>
          <Text>
            Mundu follows a standard procedure of using log files. These files
            log visitors when they use the application. All hosting companies do
            this and a part of hosting services' analytics. The information
            collected by log files include internet protocol (IP) addresses,
            browser type, Internet Service Provider (ISP), date and time stamp,
            referring/exit pages, and possibly the number of clicks. These are
            not linked to any information that is personally identifiable. The
            purpose of the information is for analyzing trends, administering
            the site, tracking users' movement on the website, and gathering
            demographic information.
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Children's Information
          </Text>
          <Text>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
            {"\n"} {"\n"}
            Mundu does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our application, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Privacy;
const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderColor: "#000",
    borderWidth: 1,
    padding: 5,
  },
  icon: {
    position: "absolute",
    top: 1,
    left: 9,
  },
  allview: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 7,
  },
});
