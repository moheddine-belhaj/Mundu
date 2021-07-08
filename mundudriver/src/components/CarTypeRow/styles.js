import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFF",
    marginTop: 5,
    height: 70,
    width: "95%",
    alignSelf: "center",
    borderRadius: 15,
  },
  image: {
    height: 50,
    width: 60,
    resizeMode: "contain",
  },
  middleContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  type: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  time: {
    color: "#5d5d5d",
  },
  rightContainer: {
    width: 100,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  price: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 5,
  },
});

export default styles;
