import { StyleSheet, View } from "react-native";
import Colors from "../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.secondary,
    borderRadius: 8,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
