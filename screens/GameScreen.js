import { View, StyleSheet, Alert, Text, FlatList } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";
import { useEffect, useState } from "react";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InfoText from "../components/InfoText";
import { Ionicons } from "@expo/vector-icons";

const generateRandomBetween = (min, max, exclude) => {
  const randNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randNumber === exclude) {
    return generateRandomBetween(max, min, exclude);
  } else {
    return randNumber;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const handleNextGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandNumber);
    setGuessRounds((prevGuess) => [newRandNumber, ...prevGuess]);
  };
  return (
    <View style={styles.screen}>
      <View>
        <Title title={"Opponent's Guess"} />
        <Card>
          <NumberContainer>{currentGuess}</NumberContainer>

          <InfoText style={styles.textMargin}>Higher or Lower?</InfoText>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={() => handleNextGuess("lower")}>
                <Ionicons name={"md-remove"} size={24} />
              </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={() => handleNextGuess("higher")}>
                <Ionicons name={"md-add"} size={24} />
              </PrimaryButton>
            </View>
          </View>
        </Card>
        <View style={styles.listContainer}>
          <FlatList
            data={guessRounds}
            renderItem={(itemData) => (
              <View style={styles.listItem}>
                <Text style={styles.listText}>
                  Opponent's Guess: {itemData.item}
                </Text>
              </View>
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary,
    textAlign: "center",
    padding: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  textMargin: {
    marginBottom: 18,
  },
  listContainer: {
    padding: 16,
  },
  listItem: {
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.primary,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 0.3,
  },
  listText: {
    color: Colors.beige,
  },
});
