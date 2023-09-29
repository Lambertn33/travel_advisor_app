import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../../../helpers/colors";

const PlacesHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Tips</Text>
      <View style={styles.link}>
        <Text style={styles.linkTitle}>Explore</Text>
        <FontAwesome name="long-arrow-right" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.primaryGreen,
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  linkTitle: {
    fontWeight: "500",
  },
});

export default PlacesHeader;

