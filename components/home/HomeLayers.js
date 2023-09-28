import { StyleSheet, Dimensions, View } from "react-native";
import React from "react";

const deviceHeight = Dimensions.get("window").height;

const HomeLayers = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftLayer}></View>
      <View style={styles.rightLayer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  leftLayer: {
    position: "absolute",
    left: 30,
    height: 300,
    borderRadius: 150,
    width: 300,
    backgroundColor: "#00bcc9",
  },
  rightLayer: {
    position: "absolute",
    top: deviceHeight / 2,
    right: 0,
    height: 300,
    borderRadius: 150,
    width: 300,
    backgroundColor: "#e99265",
  },
});

export default HomeLayers;
