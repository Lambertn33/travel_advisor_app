import React from "react";
import { View, StyleSheet } from "react-native";
import PlaceItem from "./PlaceItem";

const PlacesList = ({ places }) => {
  const renderPlaces = () => {
    return places.map((place, key) => (
      <PlaceItem key={key} place={place} />
    ));
  };

  return <View style={styles.row}>{renderPlaces()}</View>;
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});

export default PlacesList;
