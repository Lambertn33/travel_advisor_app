import { ActivityIndicator, StyleSheet, View, ScrollView } from "react-native";
import {
  DiscoverHeader,
  DiscoverSearch,
  MenuList,
} from "../components/discover";
import { PlacesHeader, PlacesList } from "../components/discover/places";
import { useState } from "react";
import { Colors } from "../helpers/colors";

const DiscoverScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={styles.container}>
      <DiscoverHeader />
      <DiscoverSearch />

      {isLoading ? (
        <ActivityIndicator size={44} color={Colors.primaryGreen} />
      ) : (
        <ScrollView>
          <MenuList />
          <View style={styles.placesContainer}>
            <PlacesHeader />
            <PlacesList />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingHorizontal: 16,
    gap: 6,
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  placesContainer: {
    paddingTop: 12,
    gap: 24,
  },
});
