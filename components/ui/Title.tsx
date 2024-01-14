import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../utils/colors";

interface TitleProps {
  children: string;
}

export default function Title({ children }: TitleProps) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    // fontWeight: "bold",
    color: Colors.default.white,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.default.white,
    padding: 12,
  },
});
