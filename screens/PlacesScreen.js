import { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View, ScrollView } from "react-native";
import {
  DiscoverHeader,
  PlacesSearch,
  MenuList,
} from "../components/discover";
import { PlacesHeader, PlacesList } from "../components/discover/places";
import { getPlaces } from "../api/places";
import { Colors } from "../helpers/colors";

const PlacesScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      setIsLoading(true);
      let places = await getPlaces();
      setPlaces(places);
      setIsLoading(false);
    };
    fetchPlaces();
  }, []);

  return (
    <View style={styles.container}>
      <DiscoverHeader />
      <PlacesSearch />

      {isLoading ? (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size={44} color={Colors.primaryGreen} />
        </View>
      ) : (
        <>
          <ScrollView>
          <MenuList />
            <View style={styles.placesContainer}>
              <PlacesHeader />
              <PlacesList places={places} />
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 32,
     paddingHorizontal: 16,
     gap: 6,
  },
  spinnerContainer: {
    flex: 1,
  },
  placesContainer: {
    paddingTop: 12,
    gap: 24,
  },
});

export default PlacesScreen;

