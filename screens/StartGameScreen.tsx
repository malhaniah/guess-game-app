import { StyleSheet, TextInput, View, Alert, Text } from "react-native";
import { useState } from "react";

// # Component Imports
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../utils/colors";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

// # Interfaces

interface StartGameScreenProps {
  onStartGame: (selectedNumber: number) => void;
}

export default function StartGameScreen({ onStartGame }: StartGameScreenProps) {
  const [enteredValue, setEnteredValue] = useState("");
  

  const numberInputHandler = (inputText: string) => {
    setEnteredValue(inputText);
  };

  const resetInputHandler = () => {
    setEnteredValue("");
  };

  const confirmHandler = () => {
    let chosenNumber = parseInt(enteredValue);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Entered value must be a number between 1 and 99.",
        [
          {
            text: "DONE",
            style: "destructive",
            onPress: resetInputHandler,
          },
        ]
      );
      return;
    }

    onStartGame(chosenNumber);
  };

  return (
    <View style={styles.container}>
      <Title>Guess Number Game 🎇</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredValue}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    alignItems: "center",
  },
  numberInput: {
    height: 48,
    fontSize: 32,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
    borderBottomColor: Colors.secondary.light,
    borderBottomWidth: 2,
    color: Colors.secondary.light,
    marginVertical: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 1,
  },
});
