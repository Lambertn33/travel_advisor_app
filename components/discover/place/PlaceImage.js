import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "../../../helpers/colors";

const PlaceImage = ({ image }) => {
  const navigation = useNavigation();

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
      <Image source={{ uri: image }} style={styles.image} />
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
    </View>
  );
};

export default PlaceImage;

const styles = StyleSheet.create({
  imageContainer: {
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
