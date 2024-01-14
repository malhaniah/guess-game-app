import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../utils/colors";

interface NumberContainerProps {
  children: any;
}

export default function NumberContainer({ children }: NumberContainerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.textContent}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary.light,
    padding: 24,
    margin: 24,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  textContent: {
    color: Colors.secondary.light,
    fontSize: 32,
    fontWeight: "bold",
  },
});
