import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../../../helpers/colors";

const PlaceDetails = ({ place }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.locationName}>{place?.name}</Text>
      <View style={styles.locationContainer}>
        <FontAwesome name="map-marker" size={24} color="black" />
        <Text>{place?.location_string}</Text>
      </View>
    </View>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  container: {
    paddingTop: 6,
  },
  locationContainer: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  locationName: {
    fontSize: 24,
    color: Colors.primaryGreen,
    fontWeight: "700",
  },
});
