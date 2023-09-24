import { StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

const InfoText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default InfoText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 18,
  },
});
