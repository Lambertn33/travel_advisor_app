import { ScrollView, StyleSheet } from "react-native";
import {
  PlaceDescription,
  PlaceDetails,
  PlaceIcons,
  PlaceImage,
  PlaceAddress
} from "../components/discover/place";

const PlaceScreen = ({ route }) => {
  const { place } = route.params;
  return (
    <ScrollView style={styles.container}>
      <PlaceImage place={place} />
      <PlaceDetails place={place} />
      <PlaceIcons place={place} />
      <PlaceDescription place={place} />
      <PlaceAddress place={place} />
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
