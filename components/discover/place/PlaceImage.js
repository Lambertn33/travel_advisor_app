import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "../../../helpers/colors";

const PlaceImage = ({ place }) => {
  const navigation = useNavigation();

  const placeImage = place?.photo?.images?.large?.url
    ? place?.photo?.images?.large?.url
    : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg";

  const navigateBack = () => navigation.goBack();
  const ImageIcon = ({ additionalStyles, name, color, onPress }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.imageAction, additionalStyles]}
      >
        <FontAwesome5 name={name} size={24} color={color} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: placeImage }} style={styles.image} />
      <View style={styles.imageActions}>
        <ImageIcon
          onPress={navigateBack}
          additionalStyles={styles.leftAction}
          color={Colors.primaryGreen}
          name="chevron-left"
        />
        <ImageIcon
          additionalStyles={styles.rightAction}
          color={Colors.primaryLight}
          name="heartbeat"
        />
      </View>
      <View style={styles.priceContainer}>
        <View style={styles.price}>
          <Text style={styles.priceLevel}>{place?.price_level}</Text>
          <Text style={styles.priceAmount}>{place?.price}</Text>
        </View>
        <View style={styles.status}>
          <Text style={styles.statusText}>{place?.open_now_text}</Text>
        </View>
      </View>
    </View>
  );
};

export default PlaceImage;

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
    height: 250,
    width: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "fill",
    borderRadius: 8,
  },

  imageActions: {
    position: "absolute",
    top: 20,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    gap: 4,
    alignItems: "flex_end",
  },
  status: {
    backgroundColor: Colors.primaryGreen,
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 4
  },
  statusText: {
    fontSize: 16,
    color: Colors.primaryLight,
    fontWeight: '900'
  },
  priceLevel: {
    color: Colors.primaryLight,
    fontWeight: "700",
  },
  priceAmount: {
    color: Colors.primaryLight,
    fontWeight: "700",
    fontSize: 24,
  },
  imageAction: {
    height: 36,
    width: 36,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  leftAction: {
    backgroundColor: Colors.primaryLight,
  },
  rightAction: {
    backgroundColor: Colors.primaryGreen,
  },
});
