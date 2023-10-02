import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../../../helpers/colors";

const PlaceAddress = ({ place }) => {
  const PlaceAddressComponent = ({ icon, value }) => {
    return (
      <View>
        {icon}
        <Text style={styles.address}>{value}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {place?.phone && (
        <PlaceAddressComponent
          value={place?.phone}
          icon={<FontAwesome name="phone" size={24} color="black" />}
        />
      )}
      {place?.email && (
        <PlaceAddressComponent
          value={place?.email}
          icon={<MaterialIcons name="email" size={24} color="black" />}
        />
      )}
      {place?.address && (
        <PlaceAddressComponent
          value={place?.address}
          icon={<FontAwesome name="map-pin" size={24} color="black" />}
        />
      )}
      <TouchableOpacity style={styles.button}>
         <Text style={styles.buttonLabel}>BOOK NOW</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlaceAddress;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    gap: 6,
    backgroundColor: Colors.secondaryLight,
    padding: 16,
    borderRadius: 8,
  },
  address: {
    fontWeight: "700",
  },
  button: {
    backgroundColor: Colors.primaryGreen,
    alignItems:'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 50
  },
  buttonLabel: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.primaryLight
  }
});
