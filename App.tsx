import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./utils/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState<boolean>(true);
  const [guessRounds, setGuessRounds] = useState<number>(0);

  // Adding custom fonts
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const startGameHandler = (selectedNumber: number) => {
    setUserNumber(selectedNumber);
    setGameOver(false);
  };

  const gameOverHandler = (numberOfRounds: number) => {
    setGameOver(true);
    setGuessRounds(numberOfRounds);
  };

  const restartGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  // const visibleHandler = () => {
  //   setVisible(!visible);
  // };

  let screen = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userChoice={userNumber} isGameOver={gameOverHandler} />
    );
  }

  if (gameOver && userNumber) {
    screen = (
      <GameOverScreen
        onRestart={restartGameHandler}
        rounds={guessRounds}
        userNumber={userNumber}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary.dark, Colors.secondary.light]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={[styles.rootContainer]}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>
      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
