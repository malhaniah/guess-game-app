import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../utils/colors";

export default function InstructionText({ children }: { children: string }) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.secondary.light,
    fontSize: 18,
    fontWeight: "bold",
  },
});
