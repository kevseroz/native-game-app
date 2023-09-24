import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.yellow,
    padding: 12,
    margin: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.primary,
    fontSize: 24,
    fontFamily: "open-sans-bold",
  },
});
