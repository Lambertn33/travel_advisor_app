import { StyleSheet, Text, View } from "react-native";
import { AntDesign, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { Colors } from "../../../helpers/colors";

const PlaceIcons = ({ place }) => {
  const PlaceIcon = ({ icon, label, value }) => {
    return (
      <View style={styles.iconContainer}>
        <View style={styles.icon}>{icon}</View>
        <View>
          <Text>{value}</Text>
          <Text>{label}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {place?.rating && (
        <PlaceIcon
          icon={<AntDesign name="star" size={24} color={Colors.darkOrange} />}
          label="Rating"
          value={place?.rating}
        />
      )}
      {place?.price_level && (
        <PlaceIcon
          icon={
            <MaterialIcons
              name="attach-money"
              size={24}
              color={Colors.darkOrange}
            />
          }
          label="Price Level"
          value={place?.price_level}
        />
      )}
      {place?.bearing && (
        <PlaceIcon
          icon={
            <FontAwesome name="map-signs" size={24} color={Colors.darkOrange} />
          }
          label="Bearing"
          value={place?.bearing}
        />
      )}
    </View>
  );
};

export default PlaceIcons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  iconContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  icon: {
    backgroundColor: Colors.primaryOrange,
    padding: 6,
    borderRadius: 4,
  },
});
