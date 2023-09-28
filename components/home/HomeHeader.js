import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>Go</Text>
      </View>
      <Text style={styles.text}>Travel</Text>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 4
  },
  logo: {
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 50
  },
  logoText: {
    color: '#00bcc9',
    fontSize: 20,
    fontWeight: '700'
  },
  text: {
    color: '#000',
    fontSize: 23,
    fontWeight: '700'
  }
});
