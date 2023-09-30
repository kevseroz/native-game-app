import { StyleSheet, Text, View, Dimensions } from "react-native";
import Colors from "../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.yellow,
    padding: deviceWidth < 380 ? 8 : 12,
    margin: deviceWidth < 380 ? 8 : 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.primary,
    fontSize: deviceWidth < 380 ? 20 : 24,
    fontFamily: "open-sans-bold",
  },
});
