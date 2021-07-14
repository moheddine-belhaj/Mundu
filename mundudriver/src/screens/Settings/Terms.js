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
const Terms = () => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
        <View style={styles.allview}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Terms and Conditions
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
            Welcome to Mundu ! {"\n"}By accessing this application we assume you
            accept these terms and conditions. Do not continue to use Mundu if
            you do not agree to take all of the terms and conditions stated on
            this page
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Conditions Privacy
          </Text>
          <Text>
            The following terminology applies to these Terms and Conditions,
            Privacy Statement and Disclaimer Notice and all Agreements:
            "Client", "You" and "Your" refers to you, the person log on this
            application and compliant to the Company’s terms and conditions.
            "The Company", "Ourselves", "We", "Our" and "Us", refers to our
            Company. "Party", "Parties", or "Us", refers to both the Client and
            ourselves. All terms refer to the offer, acceptance and
            consideration of payment necessary to undertake the process of our
            assistance to the Client in the most appropriate manner for the
            express purpose of meeting the Client’s needs in respect of
            provision of the Company’s stated services, in accordance with and
            subject to, prevailing law of Tunisia. Any use of the above
            terminology or other words in the singular, plural, capitalization
            and/or he/she or they, are taken as interchangeable and therefore as
            referring to same.
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Cookies</Text>
          <Text>
            We employ the use of cookies. By accessing Mundu , you agreed to use
            cookies in agreement with the the way centre's Privacy Policy.{"\n"}
            Most interactive application use cookies to let us retrieve the
            user’s details for each visit. Cookies are used by our website to
            enable the functionality of certain areas to make it easier for
            people visiting our website. Some of our affiliate/advertising
            partners may also use cookies.
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>License</Text>
          <Text>
            Unless otherwise stated, the way centre and/or its licensors own the
            intellectual property rights for all material on Mundu . All
            intellectual property rights are reserved. You may access this from
            Mundu for your own personal use subjected to restrictions set in
            these terms and conditions. {"\n"}
            You must not:{"\n"}- Republish material from Mundu
            {"\n"}- Sell, rent or sub-license material from Mundu {"\n"}-
            Reproduce, duplicate or copy material from Mundu {"\n"}
            -Redistribute content from Mundu {"\n"} {"\n"}
            This Agreement shall begin on the date hereof. Our Terms and
            Conditions were created with the help of the Terms And Conditions
            Generator.
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Terms;
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
