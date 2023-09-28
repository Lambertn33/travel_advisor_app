import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../helpers/colors";

const HomeDescription = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enjoy the trip with</Text>
      <Text style={[styles.header, styles.coloredHeader]}>Good Moments</Text>
      <Text>
        lLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam Duis aute irure dolor in reprehenderit
      </Text>
    </View>
  );
};

export default HomeDescription;

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  header: {
    fontSize: 32,
    fontWeight: "800",
  },
  coloredHeader: {
    color: Colors.primaryGreen,
  },
});
