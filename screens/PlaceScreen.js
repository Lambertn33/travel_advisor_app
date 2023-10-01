import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { PlaceImage } from "../components/discover/place";

const PlaceScreen = ({ route }) => {
  const { place } = route.params;
  const placeImage = place?.photo?.images?.large?.url
    ? place?.photo?.images?.large?.url
    : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg";
  return (
    <ScrollView style={styles.container}>
      <PlaceImage image={placeImage} />
    </ScrollView>
  );
};

export default PlaceScreen;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 16,
  },
});
