import { StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

const Title = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: Colors.primary,
    textAlign: "center",
    padding: 12,
    borderWidth: 2,
    borderRadius: 8,
    margin: 32,
    borderColor: Colors.beige,
  },
});
