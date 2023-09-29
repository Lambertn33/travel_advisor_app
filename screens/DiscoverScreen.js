import { StyleSheet, View } from "react-native";
import { DiscoverHeader, GoogleSearch, MenuList } from "../components/discover";

const DiscoverScreen = () => {
  return (
    <View style={styles.container}>
      <DiscoverHeader />
      <GoogleSearch />
      <MenuList />
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingHorizontal: 16,
    gap: 6,
  },
});
