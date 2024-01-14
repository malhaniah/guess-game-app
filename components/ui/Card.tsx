import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../utils/colors";

export default function Card({ children }: any) {
  return <View style={styles.inputContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.primary.darker,
    elevation: 4,
    shadowColor: Colors.default.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    gap: 15,
  },
});
