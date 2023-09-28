import React from "react";
import { StyleSheet, View } from "react-native";
import * as Animatable from 'react-native-animatable';

import {
  HomeButton,
  HomeHeader,
  HomeLayers,
  HomeImage,
  HomeDescription,
} from "../components/home";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <HomeDescription />
      <HomeLayers />
      <View style={styles.imageContainer}>
        <HomeImage />
      </View>
      <HomeButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingHorizontal: 16,
    position: "relative",
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
