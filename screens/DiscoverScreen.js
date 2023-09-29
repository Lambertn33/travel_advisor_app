import { ScrollView, StyleSheet, Text, View } from "react-native";
import DiscoverHeader from "../components/discover/DiscoverHeader";
import GoogleSearch from "../components/discover/GoogleSearch";

const DiscoverScreen = () => {
  return (
    <View style={styles.container}>
      <DiscoverHeader />
      <GoogleSearch />
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingHorizontal: 16,
  },
});
