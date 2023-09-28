import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../helpers/colors";
import { Images } from "../../helpers/images";

const DiscoverHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titlesContainer}>
        <Text style={styles.title}>Discover</Text>
        <Text style={styles.subtitle}>the beauty today</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={Images.userImage}
        />
      </View>
    </View>
  );
};

export default DiscoverHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    color: Colors.primaryGreen,
  },
  titlesContainer: {
    gap: 0,
  },
  subtitle: {
    fontSize: 28,
    fontWeight: "400",
  },
});
