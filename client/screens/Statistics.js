import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Statistics = () => {
  return (
    <View style={styles.background}>
      <View>
        <Text>Stats</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B5EAD7",
  },
});

export default Statistics;
