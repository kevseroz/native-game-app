import {
  StyleSheet,
  TextInput,
  View,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/Title";
import Card from "../components/Card";
import InfoText from "../components/InfoText";

const StartGameScreen = ({ onConfirmNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { height } = useWindowDimensions();

  const handleNumberInput = (e) => {
    setEnteredNumber(e);
  };

  const handleResetInput = () => {
    setEnteredNumber("");
  };
  const handleConfirmButton = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: handleResetInput }]
      );
      return;
    }
    onConfirmNumber(chosenNumber);
  };

  const marginTop = height < 400 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior={"position"}>
        <View style={[styles.rootContainer, { marginTop: marginTop }]}>
          <Title title={"Guess My Number!"} />
          <Card>
            <InfoText>Enter a Number</InfoText>
            <TextInput
              style={styles.input}
              maxLength={2}
              keyboardType={"number-pad"}
              autoCapitalize={"none"}
              autoCorrect={false}
              onChangeText={handleNumberInput}
              value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={handleResetInput}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={handleConfirmButton}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    height: 50,
    fontSize: 32,
    width: 50,
    textAlign: "center",
    borderBottomColor: Colors.beige,
    borderBottomWidth: 2,
    color: Colors.beige,
    marginVertical: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
