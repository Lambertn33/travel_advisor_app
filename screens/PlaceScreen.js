import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import {
  PlaceDescription,
  PlaceDetails,
  PlaceIcons,
  PlaceImage,
} from "../components/discover/place";

const PlaceScreen = ({ route }) => {
  const { place } = route.params;
  return (
    <ScrollView style={styles.container}>
      <PlaceImage place={place} />
      <PlaceDetails place={place} />
      <PlaceIcons place={place} />
      <PlaceDescription place={place} />
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
