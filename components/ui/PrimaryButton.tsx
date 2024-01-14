import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";
import Colors from "../../utils/colors";

interface ButtonProps {
  children: any;
  onPress?: (param: any) => void;
}

export default function Button({ children, onPress }: ButtonProps) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary.rippleEffect }}
      >
        <Text style={styles.textContent}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  innerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.primary.light,
    elevation: 2,
  },
  textContent: {
    color: Colors.default.white,
    fontSize: 18,
    // fontWeight: "bold",
    textAlign: "center",
    fontFamily: "open-sans-bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
