import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { PlaceImage } from "../components/discover/place";

const PlaceScreen = ({ route }) => {
  const { place } = route.params;
  return (
    <ScrollView style={styles.container}>
      <PlaceImage place={place} />
    </ScrollView>
  );
};

export default PlaceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 16,
  },
});
