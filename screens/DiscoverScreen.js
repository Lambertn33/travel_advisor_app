import { StyleSheet, Text, View } from "react-native";
import DiscoverHeader from "../components/discover/DiscoverHeader";

const DiscoverScreen = () => {
  return (
    <View style={styles.container}>
      <DiscoverHeader />
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
