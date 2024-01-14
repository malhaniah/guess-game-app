import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../utils/colors";

interface GuessLogItemProps {
  rounds: number;
  guessed: number;
}

export default function GuessLogItem({ rounds, guessed }: GuessLogItemProps) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{rounds}</Text>
      <Text style={styles.itemText}>Opponent's guess: {guessed}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary.darker,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    backgroundColor: Colors.secondary.light,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: Colors.default.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  itemText: {
    fontSize: 18,
    fontFamily: "open-sans",
  },
});
