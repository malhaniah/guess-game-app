import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import Title from "../components/ui/Title";
import Colors from "../utils/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

interface GameOverScreenProps {
  rounds: number;
  userNumber: number;
  onRestart: () => void;
}

export default function GameOverScreen({
  rounds,
  userNumber,
  onRestart,
}: GameOverScreenProps) {
  return (
    <View style={styles.container}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
      <Text style={styles.summaryText}>
        The opponent needed <Text style={styles.highlight}>{rounds}</Text>{" "}
        rounds to guess <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onRestart}>NEW GAME</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    overflow: "hidden",
    borderColor: Colors.primary.darker,
    borderWidth: 3,
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 18,
    fontFamily: "open-sans",
    textAlign: "center",
    marginHorizontal: 24,
    marginBottom: 24,
  },
  highlight: {
    color: Colors.primary.light,
    fontFamily: "open-sans-bold",
  },
});
