import { StyleSheet, View, Alert, FlatList, Text } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

// # Component Imports
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Colors from "../utils/colors";
import GuessLogItem from "../components/game/GuessLogItem";

let generateRandomBetween = (min: number, max: number, exclude: number) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

interface GameScreenProps {
  userChoice: number;
  isGameOver: (param: number) => void;
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({
  userChoice,
  isGameOver,
}: GameScreenProps) {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [logs, setLogs] = useState<any[]>([initialGuess]);

  useEffect(() => {
    if (currentGuess === userChoice) {
      isGameOver(logs.length);
    }
  }, [currentGuess, userChoice, isGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction: "lower" | "higher") => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "higher" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    let rand = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(rand);
    setLogs((prevRounds) => [rand, ...prevRounds]);
  };

  const logsListLength = logs.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons
                name="md-remove"
                size={24}
                color={Colors.default.white}
              />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("higher")}>
              <Ionicons name="md-add" size={24} color={Colors.default.white} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={logs}
          renderItem={({ item, index }) => (
            <GuessLogItem rounds={logsListLength - index} guessed={item} />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 24,
  },
});
