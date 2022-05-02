import React from "react";

import { View, StyleSheet, Text } from "react-native";

import { Entypo } from "@expo/vector-icons";

export function ButtonNew({ focused, size, color }) {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: focused ? "#3eccf5" : "#6fdfff" },
      ]}
    >
      <Entypo name="plus" size={size} color={focused ? "#fff" : "#f8f8f8"} />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});
