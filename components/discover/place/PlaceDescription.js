import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../helpers/colors";

const PlaceDescription = ({ place }) => {
  return (
    <View style={styles.container}>
      <Text>{place?.description}</Text>
      <View style={styles.cuisinesContainer}>
        {place?.cuisine?.map((c, key) => {
          return (
            <View key={key} style={styles.cuisine}>
              <Text style={styles.cuisineLabel}>{c.name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default PlaceDescription;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    gap: 4,
  },
  cuisinesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  cuisine: {
    backgroundColor: Colors.primaryGreen,
    paddingHorizontal: 16,
    borderRadius: 20,
    paddingVertical: 2,
  },
  cuisineLabel: {
    fontWeight: "900",
    fontSize: 16,
  },
});
