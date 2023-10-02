import { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View, ScrollView } from "react-native";
import { DiscoverHeader, PlacesSearch, MenuList } from "../components/discover";
import { PlacesHeader, PlacesList } from "../components/discover/places";
import { getPlaces } from "../api/places";
import { Colors } from "../helpers/colors";

const PlacesScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [places, setPlaces] = useState([]);
  const [menu, setMenu] = useState("hotels");
  const [geometry, setGeometry] = useState({
    southwest: {
      lat: null,
      lng: null,
    },
    northeast: {
      lat: null,
      lng: null,
    },
  });

  const activateMenuHandler = (key) => setMenu(key);

  const setGeometryHandler = (data) => {
    const { northeast, southwest } = data;
    setGeometry({
      southwest: {
        lat: southwest?.lat,
        lng: southwest?.lng,
      },
      northeast: {
        lat: northeast?.lat,
        lng: northeast?.lng,
      },
    });
  };

  useEffect(() => {
    const fetchPlaces = async () => {
      setIsLoading(true);
      let places = await getPlaces(menu, geometry.northeast, geometry.southwest);
      setPlaces(places);
      setIsLoading(false);
    };
    fetchPlaces();
  }, [geometry, menu]);

  return (
    <View style={styles.container}>
      <DiscoverHeader />
      <PlacesSearch onChangePlace={setGeometryHandler} />

      {isLoading ? (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size={44} color={Colors.primaryGreen} />
        </View>
      ) : (
        <>
          <ScrollView>
            <MenuList
              activeType={menu}
              onActivateMenu={activateMenuHandler}
            />
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
