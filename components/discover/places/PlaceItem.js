import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, View, Image } from "react-native";
import { Colors } from "../../../helpers/colors";

const PlaceItem = ({ place }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: place?.photo?.images?.medium?.url
              ? place?.photo?.images?.medium?.url
              : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg",
          }}
          style={styles.image}
        />
      </View>
      {place.name ? (
        <>
          <Text style={styles.title}>{place?.name}</Text>
          <View style={styles.locationContainer}>
            <FontAwesome name="map-marker" size={24} color="black" />
            <Text>{place?.location_string?.length > 12 ?
                `${place?.location_string?.slice(0, 12)}....`: place?.location_string?.length
        }</Text>
          </View>
        </>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: Colors.primaryLight,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.secondaryLight,
  },
  imageContainer: {
    height: 150,
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
  },
  image: {
    objectFit: "fill",
    width: '100%',
    height: '100%'
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});

export default PlaceItem;
