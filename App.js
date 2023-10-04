import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleNumberPicked = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameOver(false);
  };

  const handleGameOver = (numberOfRounds) => {
    setGameOver(true);
    setGuessRounds(numberOfRounds);
  };

  const handleStartNewGame = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  let screen = <StartGameScreen onConfirmNumber={handleNumberPicked} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={handleGameOver} />;
  }
  if (gameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        onStartNewGame={handleStartNewGame}
        roundsNumber={guessRounds}
      />
    );
  }

  return (
    <>
      <StatusBar style={"light"} />
      <LinearGradient
        colors={[Colors.beige, Colors.yellow]}
        style={styles.screen}
      >
        <ImageBackground
          source={require("./assets/images/dices.jpeg")}
          resizeMode={"cover"}
          style={styles.screen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.screen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.35,
  },
});
